"use client"
import React from 'react'
import {Button} from "@radix-ui/themes";
import {useRouter} from "next/navigation";

function Issues() {
  const router = useRouter();
  return (
    <div>
     <Button onClick={()=>router.push("/issues/new")}>New Issues</Button>
    </div>
  )
}

export default Issues