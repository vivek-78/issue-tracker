import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

function EditIssue({ issue }: { issue: Issue }) {
  return (
    <Button className="sm:max-w-full">
      <Pencil2Icon />
      <Link href={`/issues/edit/${issue.id}`}>Edit Issue</Link>
    </Button>
  );
}

export default EditIssue;
