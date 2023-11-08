import { BadgeComponent } from "@/app/components";
import { Issue } from "@prisma/client";
import { Box, Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

function IssueDetails({ issue }: { issue: Issue }) {
  return (
    <Box>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-2 my-2">
        <BadgeComponent status={issue.status} />
        <Text> {issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Box>
  );
}

export default IssueDetails;
