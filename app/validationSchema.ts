import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required").max(225),
  description: z.string().min(1, "description is required"),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(225).optional(),
  description: z
    .string()
    .min(1, "description is required")
    .max(65535)
    .optional(),
  assignedtoUserId: z
    .string()
    .min(1, "assignedIssueId is required")
    .max(65535)
    .optional(),
});
