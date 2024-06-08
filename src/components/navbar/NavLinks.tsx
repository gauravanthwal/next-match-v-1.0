"use client";
import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};

const NavLinks = ({ href, label }: Props) => {
  const pathName = usePathname();

  return (
    <NavbarItem
      isActive={pathName === href ? true : false}
      as={Link}
      href={href}
    >
      {label}
    </NavbarItem>
  );
};

export default NavLinks;
