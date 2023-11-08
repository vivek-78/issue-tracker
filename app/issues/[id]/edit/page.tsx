import React from "react";
import IssueForm from "../../_components/IssueForm";
import { Issue } from "@prisma/client";
import { notFound } from "next/navigation";
import prisma from "@/prisma/client";
interface Props {
  params: { id: string }
}
async function page({ params }: Props) {
  const {id} = params
  const issueData = await prisma.issue.findUnique({
    where: { id:parseInt(id) },
  });
  if (!issueData) notFound();
  return <IssueForm issue={issueData} />;
}

export default page;
