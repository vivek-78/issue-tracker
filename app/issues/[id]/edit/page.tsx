import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../../_components/IssueFormSkeleton";
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />
});
interface Props {
  params: { id: string };
}
async function page({ params }: Props) {
  const { id } = params;
  const issueData = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issueData) notFound();
  return <IssueForm issue={issueData} />;
}

export default page;
