import React from "react";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import BadgeComponent from "@/app/components/BadgeComponent";

interface Props {
  params: { id: string };
}
async function IssueDetailPage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-2 my-2">
        <BadgeComponent status={issue.status} />
        <Text> {issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>{issue.description}</Card>
    </div>
  );
}

export default IssueDetailPage;
