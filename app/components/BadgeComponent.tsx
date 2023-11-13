import { Badge } from "@radix-ui/themes";
import React from "react";
import { Status } from "@prisma/client";
function BadgeComponent({ status }: { status: Status }) {
  const statusMap: Record<
    Status,
    { lable: string; color: "red" | "violet" | "green" }
  > = {
    OPEN: { lable: "open", color: "red" },
    CLOSED: { lable: "closed", color: "green" },
    IN_PROGRESS: { lable: "in progress", color: "violet" },
  };
  return (
    <div>
      <Badge color={statusMap[status].color}>
        {statusMap[status].lable}
      </Badge>
    </div>
  );
}

export default BadgeComponent;
