import React from "react";
import { Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueToolBar from "./IssueToolBar";
import delay from "delay";
import Link from "next/link";
import BadgeComponent from "../components/BadgeComponent";

const Issues = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
  return (
    <div>
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
                <Link href={`/issues/${issue.id}`}>
                {issue.title}
                <div className="block md:hidden">
                  <BadgeComponent status={issue.status} />
                </div>
                </Link>
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
    </div>
  );
};

export default Issues;
