"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RandomPage() {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/random")
      .then(r => r.json())
      .then(d => {
        if (d.slug) router.replace(`/wiki/${d.slug}`);
        else router.replace("/");
      });
  }, [router]);

  return (
    <p style={{ fontFamily: "var(--font-family-sans)", color: "var(--color-subtle)" }}>
      Selecting a random article…
    </p>
  );
}
