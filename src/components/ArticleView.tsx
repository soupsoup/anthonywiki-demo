import Link from "next/link";
import type { ArticleData } from "@/lib/articles";

function TableOfContents({ toc }: { toc: ArticleData["toc"] }) {
  if (toc.length < 3) return null;
  return (
    <div className="wiki-toc">
      <div className="wiki-toc-title">Contents</div>
      <ol>
        {toc
          .filter((e) => e.level === 2)
          .map((entry, i) => (
            <li key={entry.id}>
              <a href={`#${entry.id}`}>{i + 1}. {entry.text}</a>
              {toc.filter((sub) => sub.level === 3).some((sub) => {
                // find subs that appear after this h2 and before the next h2
                const h2s = toc.filter(e => e.level === 2);
                const myIdx = h2s.indexOf(entry);
                const nextH2 = h2s[myIdx + 1];
                const myPos = toc.indexOf(entry);
                const nextPos = nextH2 ? toc.indexOf(nextH2) : toc.length;
                const subPos = toc.indexOf(sub);
                return subPos > myPos && subPos < nextPos;
              }) && (
                <ol style={{ paddingLeft: "1.25em", listStyle: "none" }}>
                  {toc
                    .filter((sub) => {
                      if (sub.level !== 3) return false;
                      const h2s = toc.filter(e => e.level === 2);
                      const myIdx = h2s.indexOf(entry);
                      const nextH2 = h2s[myIdx + 1];
                      const myPos = toc.indexOf(entry);
                      const nextPos = nextH2 ? toc.indexOf(nextH2) : toc.length;
                      const subPos = toc.indexOf(sub);
                      return subPos > myPos && subPos < nextPos;
                    })
                    .map((sub, j) => (
                      <li key={sub.id} className="toc-h3">
                        <a href={`#${sub.id}`}>{i + 1}.{j + 1} {sub.text}</a>
                      </li>
                    ))}
                </ol>
              )}
            </li>
          ))}
      </ol>
    </div>
  );
}

function Infobox({ article }: { article: ArticleData }) {
  if (!article.infobox && !article.image) return null;
  return (
    <div className="wiki-infobox">
      {article.infobox?.["_title"] && (
        <div className="wiki-infobox-title">{article.infobox["_title"]}</div>
      )}
      {article.image && (
        <div className="wiki-infobox-image">
          <img src={article.image} alt={article.imageCaption || article.title} />
          {article.imageCaption && (
            <div className="wiki-infobox-caption">{article.imageCaption}</div>
          )}
        </div>
      )}
      {article.infobox && (
        <table>
          <tbody>
            {Object.entries(article.infobox)
              .filter(([k]) => !k.startsWith("_"))
              .map(([key, val]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td dangerouslySetInnerHTML={{ __html: val }} />
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default function ArticleView({ article }: { article: ArticleData }) {
  return (
    <div>
      <div className="wiki-page-tabs">
        <span className="wiki-page-tab active">Article</span>
        <Link href={`/wiki/${article.slug}/edit`} className="wiki-page-tab">Edit</Link>
        <Link href={`/wiki/${article.slug}#backlinks`} className="wiki-page-tab">Backlinks ({article.backlinks.length})</Link>
      </div>

      <h1 className="wiki-page-title">{article.title}</h1>

      <div className="wiki-content clearfix">
        <Infobox article={article} />
        <TableOfContents toc={article.toc} />
        <div dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
      </div>

      {article.categories.length > 0 && (
        <div className="wiki-categories">
          <span className="wiki-categories-title">Categories:</span>
          <span className="wiki-categories-list">
            {article.categories.map((cat) => (
              <Link key={cat} href={`/category/${encodeURIComponent(cat)}`}>
                {cat}
              </Link>
            ))}
          </span>
        </div>
      )}

      {article.backlinks.length > 0 && (
        <div className="wiki-backlinks" id="backlinks">
          <h4>Articles linking here ({article.backlinks.length})</h4>
          <ul>
            {article.backlinks.map((slug) => (
              <li key={slug}>
                <Link href={`/wiki/${slug}`}>{slug.replace(/-/g, " ")}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="wiki-article-meta">
        Last modified: {article.lastModified}
        {" · "}
        <Link href={`/wiki/${article.slug}/edit`}>Edit this article</Link>
      </div>
    </div>
  );
}
