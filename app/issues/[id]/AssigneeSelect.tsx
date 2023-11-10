"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Skeleton} from "@/app/components"

function AssigneeSelect() {
  const { data: users, error, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn:() => axios.get("/api/users").then(res => res.data),
    staleTime: 60 * 1000,
    retry: 3
  });
  if(error) return null;
  if(isLoading) return <Skeleton width={"3"}/>
  console.log(users)
  return (
    <Select.Root>
      <Select.Trigger placeholder="assign" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestion</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export default AssigneeSelect;
