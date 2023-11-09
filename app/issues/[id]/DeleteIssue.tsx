"use client";
import { useState } from "react";
import Spinner from "@/app/Spinner";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

function DeleteIssue({ issueId }: { issueId: number }) {
  const [error, setError] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const router = useRouter();
  const handleDelete = async () => {
    try {
      setDeleting(true);
      console.log(deleting);
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
      router.refresh();
    } catch (err) {
      setDeleting(false);
      setError(true);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={deleting}>
            {deleting && <Spinner />}
            Delete Issue
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Cofirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you that want to delete this issue? This action cannot
            be undone
          </AlertDialog.Description>
          <Flex className="mt-3" gap="2">
            <AlertDialog.Cancel>
              <Button color="gray">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={handleDelete}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            Issue couldnt be Deleted
          </AlertDialog.Description>
          <AlertDialog.Action>
            <Button color="gray" mt="2" onClick={() => setError(false)}>
              OK
            </Button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
}

export default DeleteIssue;
