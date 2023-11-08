import React from "react";
import { Skeleton } from "@/app/components";
function loading() {
  return (
    <div className="max-w-xl">
      <Skeleton width="5rem" />
      <Skeleton height="20rem" />
      <Skeleton width="3rem" />
    </div>
  );
}

export default loading;
