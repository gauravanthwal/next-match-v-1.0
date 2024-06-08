import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaRegSmile } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button
        as={Link}
        href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile />}
        size={"md"}
      >
        Save
      </Button>
    </div>
  );
};

export default Home;
