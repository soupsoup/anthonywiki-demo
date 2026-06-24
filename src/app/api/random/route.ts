import { NextResponse } from "next/server";
import { getAllSlugs } from "@/lib/articles";

export async function GET() {
  const slugs = getAllSlugs();
  if (!slugs.length) return NextResponse.json({ slug: null });
  const slug = slugs[Math.floor(Math.random() * slugs.length)];
  return NextResponse.json({ slug });
}
