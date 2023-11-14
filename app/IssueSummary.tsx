import { Status } from "@prisma/client";
import { Card, Flex,Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  close: number;
}
function IssueSummary({ open, close, inProgress }: Props) {
  const containers: {
    lable: string;
    value: number;
    status: Status;
  }[] = [
    {
      lable: "Open Issues",
      value: open,
      status: "OPEN",
    },
    {
      lable: "In progress Issues",
      value: close,
      status: "CLOSED",
    },
    {
      lable: "Closed Issues",
      value: inProgress,
      status: "IN_PROGRESS",
    },
  ];
  return (
    <Flex gap={"3"}>
      {containers.map((container) => (
        <Card key={container.lable}>
          <Flex direction="column" gap="1">
            <Link href={`/issues/list?status=${container.status}`} className="text-sm font-medium">
                {container.lable}
            </Link>
            <Text size={"5"} className="font-bold">
                {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}

export default IssueSummary;
