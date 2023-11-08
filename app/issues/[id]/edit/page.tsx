import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";
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
