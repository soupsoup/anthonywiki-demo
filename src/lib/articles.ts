import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

export interface ArticleData {
  slug: string;
  title: string;
  summary: string;
  categories: string[];
  image?: string;
  imageCaption?: string;
  infobox?: Record<string, string>;
  lastModified: string;
  content: string;
  htmlContent: string;
  toc: TocEntry[];
  backlinks: string[];
  wikiLinks: string[];
}

export interface TocEntry {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractWikiLinks(content: string): string[] {
  const regex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  const links: string[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    links.push(slugify(match[1].trim()));
  }
  return [...new Set(links)];
}

function processWikiLinks(content: string): string {
  // [[Target|Display Text]] or [[Target]]
  return content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, display) => {
    const slug = slugify(target.trim());
    const text = display || target.trim();
    return `[${text}](/wiki/${slug})`;
  });
}

function extractToc(html: string): TocEntry[] {
  const toc: TocEntry[] = [];
  const regex = /<h([23])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[23]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    toc.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, ''),
    });
  }
  return toc;
}

function addHeadingIds(html: string): string {
  const counts: Record<string, number> = {};
  return html.replace(/<h([23])>(.*?)<\/h[23]>/gi, (_, level, text) => {
    const plain = text.replace(/<[^>]+>/g, '');
    const base = slugify(plain);
    counts[base] = (counts[base] || 0) + 1;
    const id = counts[base] > 1 ? `${base}-${counts[base]}` : base;
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

async function markdownToHtml(content: string): Promise<string> {
  const withWikiLinks = processWikiLinks(content);
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(withWikiLinks);
  const html = result.toString();
  return addHeadingIds(html);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''));
}

export async function getArticle(slug: string): Promise<ArticleData | null> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const htmlContent = await markdownToHtml(content);
  const toc = extractToc(htmlContent);
  const wikiLinks = extractWikiLinks(content);

  return {
    slug,
    title: data.title || slug,
    summary: data.summary || '',
    categories: data.categories || [],
    image: data.image || null,
    imageCaption: data.imageCaption || null,
    infobox: data.infobox || null,
    lastModified: data.lastModified || new Date().toISOString().split('T')[0],
    content,
    htmlContent,
    toc,
    backlinks: [],
    wikiLinks,
  };
}

export async function getAllArticles(): Promise<ArticleData[]> {
  const slugs = getAllSlugs();
  const articles = await Promise.all(slugs.map((s) => getArticle(s)));
  return articles.filter(Boolean) as ArticleData[];
}

export async function getArticleWithBacklinks(slug: string): Promise<ArticleData | null> {
  const article = await getArticle(slug);
  if (!article) return null;

  const all = await getAllArticles();
  const backlinks = all
    .filter((a) => a.slug !== slug && a.wikiLinks.includes(slug))
    .map((a) => a.slug);

  return { ...article, backlinks };
}

export async function searchArticles(query: string): Promise<ArticleData[]> {
  const all = await getAllArticles();
  const q = query.toLowerCase();
  return all.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q)
  );
}

export async function getArticlesByCategory(category: string): Promise<ArticleData[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.categories.map((c) => c.toLowerCase()).includes(category.toLowerCase()));
}

export async function getAllCategories(): Promise<{ name: string; count: number }[]> {
  const all = await getAllArticles();
  const cats: Record<string, number> = {};
  all.forEach((a) =>
    a.categories.forEach((c) => {
      cats[c] = (cats[c] || 0) + 1;
    })
  );
  return Object.entries(cats)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
