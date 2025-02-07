import { getDocumentById } from "@/lib/doc";
import Link from "next/link";
import React from "react";

export default async function ContentDisplay({ id }) {
  const content = await getDocumentById(id);
  console.log(content);

  return (
    <article className="prose dark:prose-invert">
      <h1>{content.title}</h1>
      <div>
        <span>Published On: {content.date}</span> by{" "}
        <Link href={`/author${content.author}`}>{content.author}</Link> Under
        the{" "}
        <Link href={`/categories${content.category}`}>{content.category}</Link>
      </div>
      <div></div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: content.contentHtml }}
      />
    </article>
  );
}
