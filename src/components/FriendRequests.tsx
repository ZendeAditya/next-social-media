import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const FriendRequests = (props: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500">
          See More
        </Link>
      </div>
      {/* user */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt="user"
            width={16}
            height={16}
            className="object-cover w-10 h-10 rounded-full  "
          />
          <span>Aditya Zende</span>
        </div>
        <div className="flex items-end gap-4">
          <Image  src="/accept.png" width={16} height={16} className="cursor-pointer" alt="accept"/>
          <Image src="/reject.png" width={16} height={16} className="cursor-pointer" alt="reject"/>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
