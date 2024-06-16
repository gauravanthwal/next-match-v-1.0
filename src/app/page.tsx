import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaRegSmile } from "react-icons/fa";

const Home = async() => {

  const session = await auth();
  return (
    <div>
      <h1>Hello</h1>

      <h3 className="text-2xl font-semibold">User session data: </h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form action={async function(){
            'use server';
            await signOut();
          }}>
            <Button
              color="primary"
              variant="bordered"
              startContent={<FaRegSmile />}
              size={"md"}
              type="submit"
            >
            Sign Out
          </Button>
          </form>
        </div>
      ) : (
        <div>Not signed in</div>
      )}
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
