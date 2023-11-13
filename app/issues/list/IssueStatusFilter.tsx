import { Select } from "@radix-ui/themes";
import { Status } from "@prisma/client";
import React from "react";
import { useRouter } from "next/navigation";

function IssueStatusFilter() {
  const status: { lable: string; value?: Status }[] = [
    { lable: "All"},
    { lable: "open", value: "OPEN" },
    { lable: "in progress", value: "IN_PROGRESS" },
    { lable: "closed", value: "CLOSED" },
  ];
  const router = useRouter();
  return (
    <Select.Root onValueChange={(status)=>{
      const query = status != " " ? `?status=${status}` : "";
      router.push("/issues/list"+query);
    }}>
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {status.map((status) => (
          <Select.Item key={status.value} value={status.value || " "}>
            {status.lable}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

export default IssueStatusFilter;
