import Image from "next/image";
import React, { Suspense } from "react";
import Comments from "./Comments";

type Props = {};

const Post = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/emoji.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            <p>aditya zende</p>
            {/* {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username} */}
          </span>
        </div>
        {/* {userId === post.user.id && <PostInfo postId={post.id} />} */}
        <Image
            src={"/more.png"}
            width={16}
            height={16}
            alt=""
          />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {/* {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        )} */}
         <Image
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
          />
        {/* <p>{post.desc}</p> */}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis odio tempora consequuntur cum neque dicta modi, ea iste inventore quae fugit nostrum ab saepe doloremque. Inventore natus fuga quas.
        </p>
      </div>
      {/* INTERACTION */}
      <Suspense fallback="Loading...">
        {/* <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post._count.comments}
        /> */}
      </Suspense>
      <Suspense fallback="Loading...">
        {/* <Comments postId={post.id} /> */}
        <Comments/>
      </Suspense>
    </div>
  );
};

export default Post;
