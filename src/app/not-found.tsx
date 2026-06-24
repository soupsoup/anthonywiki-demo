import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="wiki-page-title">Page not found</h1>
      <div className="wiki-ambox" style={{ background: "#fef9e7", borderColor: "#c8a400" }}>
        <span className="wiki-ambox-icon">⚠️</span>
        ReyesWiki does not have an article with this exact name.
      </div>
      <div style={{ fontFamily: "var(--font-family-sans)", fontSize: "0.9375rem", marginTop: "1rem" }}>
        <p>You can:</p>
        <ul>
          <li><Link href="/wiki/new">Create a new article</Link> with this name</li>
          <li><Link href="/search">Search ReyesWiki</Link> for related articles</li>
          <li><Link href="/">Return to the main page</Link></li>
        </ul>
      </div>
    </div>
  );
}
