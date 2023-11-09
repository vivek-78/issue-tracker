import { Flex } from '@radix-ui/themes'
import React from 'react'
import { Skeleton } from "@/app/components";

function IssueFormSkeleton() {
  return (
    <div>
      <Skeleton width="5rem"/>
      <Flex className="hidden space-x-2 my-2">
        <Skeleton width="3rem" />
        <Skeleton width="5rem" />
      </Flex>
      <Skeleton height="20rem"/>
    </div>
  )
}

export default IssueFormSkeleton