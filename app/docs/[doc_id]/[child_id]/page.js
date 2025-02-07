import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

export default function page({ params: { child_id } }) {
  return <ContentDisplay id={child_id} />;
}
