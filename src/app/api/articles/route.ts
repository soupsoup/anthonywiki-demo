import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export async function POST(req: NextRequest) {
  const { slug, content } = await req.json();
  if (!slug || !content) return NextResponse.json({ error: "Missing slug or content" }, { status: 400 });

  const safe = slug.replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-");
  const file = path.join(ARTICLES_DIR, `${safe}.md`);

  if (!fs.existsSync(ARTICLES_DIR)) fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  fs.writeFileSync(file, content, "utf-8");

  return NextResponse.json({ slug: safe });
}

export async function PUT(req: NextRequest) {
  const { slug, content } = await req.json();
  if (!slug || !content) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const file = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return NextResponse.json({ error: "Not found" }, { status: 404 });

  fs.writeFileSync(file, content, "utf-8");
  return NextResponse.json({ slug });
}
