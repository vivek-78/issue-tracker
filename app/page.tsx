import Image from "next/image";
import LatestIssue from "./LatestIssue";
import IssueSummary from "./IssueSummary";
import prisma from "@/prisma/client";

async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const close = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <div>
      <IssueSummary open={open} inProgress={inProgress} close={close} />
    </div>
  );
}

export default Home;
