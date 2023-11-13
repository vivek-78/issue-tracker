"use client";
import React from "react";
import { Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import IssueStatusFilter from "./IssueStatusFilter";

function IssueToolBar() {
  const router = useRouter();
  return (
    <Flex mb="5" justify="between">
      <IssueStatusFilter />
      <Button onClick={() => router.push("/issues/new")}>New Issues</Button>
    </Flex>
  );
}

export default IssueToolBar;
