import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiMatchTip } from "react-icons/gi";
import NavLinks from "./NavLinks";
import { auth } from "@/auth";
import UserMenu from "./UserMenu";

const TopNav = async () => {
  const session = await auth();
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-yellow-200",
        ],
      }}
    >
      <NavbarBrand as={Link} href={"/"}>
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLinks href="/members" label="Matches" />
        <NavLinks href="/lists" label="Lists" />
        <NavLinks href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <UserMenu user={session?.user} />
        ) : (
          <>
            <Button
              variant="bordered"
              className="text-white"
              as={Link}
              href={"/login"}
            >
              Login
            </Button>
            <Button
              variant="bordered"
              className="text-white"
              as={Link}
              href={"/register"}
            >
              Register
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default TopNav;
