"use client"
import { Card } from '@radix-ui/themes'
import React from 'react'
import {ResponsiveContainer,XAxis,YAxis,BarChart,Bar} from "recharts"

interface Props {
    open:number,
    close:number,
    inProgress:number
}
function IssueChart({open,close,inProgress}:Props) {
  const data = [
    {label:"Open",value:open},
    {label:"Close",value:close},
    {label:"In Progress",value:inProgress}
  ]
  return (
    <Card>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="label"/>
                <YAxis />
                <Bar dataKey="value" barSize={60} fill="#3358D4"/>
            </BarChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart