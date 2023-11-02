import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../createIssueSchema";
export async function POST(request:NextRequest) {
    const body = await request.json();
    const validIssue = createIssueSchema.safeParse(body);
    if(!validIssue.success)
        return NextResponse.json(validIssue.error.errors, {status : 400});
    const newIssue = await prisma.issue.create({
        data:{title:body.title,description:body.description}
    });

    return NextResponse.json(newIssue,{status:201});
}