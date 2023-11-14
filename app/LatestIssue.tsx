import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { BadgeComponent } from "./components";

async function LatestIssue() {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assidnedUser: true,
    },
  });
  return (
    <Card>
        <Heading mb={"5"} size={"4"}>Latest Issues</Heading>
    <Table.Root>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Flex justify={"between"}>
                <Flex direction={"column"} gap={"2"}>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <BadgeComponent status={issue.status} />
                </Flex>
                {issue.assidnedUser && (
                  <Avatar src={issue.assidnedUser?.image!} fallback={"?"}/>
                )}
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Card>
  );
}

export default LatestIssue;
