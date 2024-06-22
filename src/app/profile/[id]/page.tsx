import LeftMenu from "@/components/LeftMenu";
import PostFeed from "@/components/PostFeed";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <div className=" flex gap-6 pt-6">
      <div className=" hidden xl:block  w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className=" w-full lg:w-[70%]  xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image src="/noAvatar.png" alt="profile" fill className="object-cover"/>
                <Image src="/emoji.png" alt="emoji" width={128} height={128} className="w-32 h-32 rounded-full absolute left-0 right-0 object-cover m-auto -bottom-16 ring-4 ring-white" />
              </div>
              <h1 className="mt-20 mb-3 text-2xl font-semibold">Aditya</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Followrs</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Followings</span>
                </div>
              </div>
            </div>
          </div>
          <PostFeed />
        </div>
      </div>
      <div className=" hidden lg:block w-[30%]">
        <RightMenu userId="text" />
      </div>
    </div>
  );
};

export default ProfilePage;
