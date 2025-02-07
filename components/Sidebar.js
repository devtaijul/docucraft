import Link from "next/link";
import React from "react";

export default function Sidebar({ docs }) {
  const roots = docs.filter((doc) => !doc.parent);

  const nonRoots = Object.groupBy(docs, (doc) => doc.parent);

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {roots.map((doc) => {
          const childs = nonRoots[doc.id];

          return (
            <li className="relative">
              <Link
                aria-current="page"
                className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition text-zinc-900 dark:text-white"
                href={`/docs/${doc.id}`}
              >
                <span className="truncate">{doc.title}</span>
              </Link>
              {childs && (
                <ul role="list" style={{ opacity: 1 }}>
                  {childs.map((child) => {
                    return (
                      <li>
                        <Link
                          className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                          href={`/docs/${doc.id}/${child.id}`}
                        >
                          <span className="truncate">{child.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
