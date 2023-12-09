"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UserLogo } from "@/public/icons/icons";
import { User, Link } from "@nextui-org/react";
function NavBar() {
  const [IsTheUserLoged, setIsTheUserLoged] = useState<boolean>(true);
  return (
    <div className="flex justify-between items-center py-3">
      <div>
        <Image
          src="/images/logo.png"
          alt="Website log"
          width={230}
          height={230}
        />
      </div>
      <div>
        <span className="cursor-pointer">
          {IsTheUserLoged ? (
            <User
              className="text-white"
              name="Yassine ouchen"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal
                  className=" text-skin-prime"
                >
                  @youchen
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
          ) : (
            <UserLogo />
          )}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
