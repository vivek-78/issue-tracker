"use client";
import React from "react";
import { FaBug } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
function NavBar() {
  const currentPathName = usePathname();
  const { status, data: session } = useSession();
  const links = [
    {
      href: "/dashboard",
      lable: "Dashboard",
    },
    {
      href: "/issues/list",
      lable: "Issues",
    },
  ];
  return (
    <nav className="p-5 mb-5 py-3 border-b">
      <Flex justify={"between"} align={"center"}>
        <Flex align="center" gap="3">
          <Link href="/" className="text-slate-950">
            <FaBug />
          </Link>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classNames({
                    "text-zinc-900": currentPathName === link.href,
                    "text-zinc-500": currentPathName !== link.href,
                    "transition-colors": true,
                  })}
                >
                  {link.lable}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
        <Flex>
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session?.user?.image!}
                    fallback="?"
                    size="2"
                    radius="full"
                    className="hover:cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text>{session?.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href={"/api/auth/signout"}>Log out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}

            {status === "unauthenticated" && (
              <Button>
                <Link href={"/api/auth/signin"}>Log in</Link>
              </Button>
            )}
          </Box>
        </Flex>
      </Flex>
    </nav>
  );
}

export default NavBar;
