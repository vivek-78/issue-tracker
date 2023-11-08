import React from "react";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loading() {
  return (
    <div>
      <Skeleton width="5rem"/>
      <Flex className="hidden space-x-2 my-2">
        <Skeleton width="3rem" />
        <Skeleton width="5rem" />
      </Flex>
      <Skeleton height="20rem"/>
    </div>
  );
}

export default loading;
