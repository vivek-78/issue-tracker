import React from "react";
import { Flex, Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueToolBar from "./IssueToolBar";
import Link from "next/link";
import { BadgeComponent } from "@/app/components";
import { Status } from "@prisma/client";
import PaginationComponent from "@/app/components/PaginationComponent";
const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; page: string };
}) => {
  const statusValues = Object.values(Status);
  const status = statusValues.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    skip: (page - 1) * 10,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({ where: { status } });
  return (
    <Flex direction={"column"} gap={"3"}>
      <IssueToolBar />
      <Table.Root variant="surface" className="mt-2">
        <Table.Header>
          <Table.ColumnHeaderCell>Issues</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Created Date
          </Table.ColumnHeaderCell>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <BadgeComponent status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <BadgeComponent status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <PaginationComponent pageSize={pageSize} itemCount={issueCount} currentPage={page}/>
    </Flex>
  );
};

export default IssuesPage;
