import Link from "next/link";

export default function WikiFooter() {
  return (
    <footer className="wiki-footer">
      <div style={{ marginBottom: "0.5rem" }}>
        <Link href="/">AnthonyWiki</Link>
        {" · "}
        <Link href="/special/all-articles">All articles</Link>
        {" · "}
        <Link href="/special/categories">Categories</Link>
        {" · "}
        <Link href="/wiki/new">New article</Link>
      </div>
      <div>
        Text is available under the{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0</a> license.
        {" "}AnthonyWiki is a personal wiki powered by Next.js.
      </div>
    </footer>
  );
}
