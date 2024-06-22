import Image from "next/image";
import React from "react";

type Props = {};

const AddPost = (props: Props) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src={"/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* post  */}
      <div className="flex-1">
        {/* text input  */}
        <div className="flex gap-4">
          <textarea
            name=""
            placeholder=""
            id="what' on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2 border-2 border-slate-50 outline-none"
          ></textarea>
          <Image
            src={"/emoji.png"}
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* post options  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addImage.png"} alt="" width={20} height={20} />
            <span>Add Image</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addVideo.png"} alt="" width={20} height={20} />
            <span>Add Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addevent.png"} alt="" width={20} height={20} />
            <span>Add Event</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/poll.png"} alt="" width={20} height={20} />
            <span>Add Poll</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
