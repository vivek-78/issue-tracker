import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssue from "./EditIssue";
import IssueDetails from "./IssueDetails";
import DeleteIssue from "./DeleteIssue";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: { id: string };
}
async function IssueDetailPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "5" }} gap="3">
      <Box className="lg:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect />
            <EditIssue issue={issue} />
            <DeleteIssue issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
}

export default IssueDetailPage;
