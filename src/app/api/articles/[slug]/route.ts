import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const file = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const content = fs.readFileSync(file, "utf-8");
  return NextResponse.json({ slug, content });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const file = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return NextResponse.json({ error: "Not found" }, { status: 404 });
  fs.unlinkSync(file);
  return NextResponse.json({ deleted: slug });
}
