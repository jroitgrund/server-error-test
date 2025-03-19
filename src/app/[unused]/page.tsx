"use client";

import { use } from "react";

export default function OtherPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { unused: thisForcesDynamicRendering } = use(searchParams);
  const foo = window.document;

  return (
    <div>
      {typeof foo}
      {thisForcesDynamicRendering}
    </div>
  );
}
