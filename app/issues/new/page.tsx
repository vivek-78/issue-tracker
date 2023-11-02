"use client";
import { useState } from "react";
import { Button, TextArea, TextField, Callout, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/createIssueSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";

type issueForm = z.infer<typeof createIssueSchema>;
function NewIssue() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState : { errors },
  } = useForm<issueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState(false);
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-2">
          <Callout.Text>Unexpected error has occured</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="max-w-xl"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues",data);
            router.push("/issues")
          } catch (err) {
            console.log(err);
            setError(true);
          }
        })}
      >
        {errors.title && <Text color="red" as="p">Title is required</Text>}
        <TextField.Root className="max-w-xl mb-2">
          <TextField.Input
            placeholder="Enter Issue Title"
            {...register("title")}
          />
        </TextField.Root>
        {errors.description && <Text color="red" as="p">Description is required</Text>}
        <TextArea
          className="max-w-xl mb-3"
          placeholder="Enter Issue Description"
          {...register("description")}
        />
        <Button>Create New Issue</Button>
      </form>
    </div>
  );
}

export default NewIssue;
