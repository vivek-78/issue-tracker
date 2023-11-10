import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "@/app/validationSchema";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validIssue = issueSchema.safeParse(body);
  if (!validIssue.success)
    return NextResponse.json(validIssue.error.errors, { status: 400 });
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
