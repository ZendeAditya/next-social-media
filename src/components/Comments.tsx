import Image from "next/image";
import React from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div>
      {/* write  */}
      <div className="flex items-center gap-4">
        <Image src="/emoji.png" width={32} height={32} alt="" />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="write comment"
            className="bg-transparent outline-none"
          />
          <Image
            src="/emoji.png"
            width={16}
            height={16}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* comments */}
      <div className="">
        {/* comments  */}
        <div className="flex gap-4 justify-between mt-6">
          {/* avatar  */}
          <div className="">
            <Image
              src="/noAvatar.png"
              width={40}
              height={40}
              alt=""
              className="cursor-pointer  w-10 h-10"
            />
          </div>
          {/* des  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">User name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aliquid exercitationem non repellendus repudiandae illo quia vero
              quaerat deleniti voluptas commodi tempora labore quidem
              temporibus, eius ex ut, accusantium voluptatem!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  width={16}
                  height={16}
                  alt=""
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes </span>
              </div>
              <div className="replay">Reply</div>
            </div>
          </div>
          {/* icon  */}
          <div className="">
            <Image
              src="/more.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
