import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

export default function page({ params: { doc_id } }) {
  return <ContentDisplay id={doc_id} />;
}
