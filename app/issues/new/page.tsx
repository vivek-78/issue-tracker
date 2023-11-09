import dynamic from "next/dynamic";
import React from "react";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />
});
function page() {
  return <IssueForm />;
}

export default page;
