import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssue from "./EditIssue";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}
async function IssueDetailPage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }}>
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssue issue={issue} />
      </Box>
    </Grid>
  );
}

export default IssueDetailPage;
