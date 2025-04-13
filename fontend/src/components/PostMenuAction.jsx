import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const PostMenuAction = () => {
  return (
    <div className="">
      <h1 className=" mb-4 text-sm font-medium"></h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <div className="">
          <CiHeart className="w-5 h-5" />
          <span>Lưu bài viết</span>
        </div>
        <div className="">
          <MdDeleteOutline className="w-5 h-5" />
          <span>Xóa bài</span>
        </div>
      </div>
    </div>
  );
};

export default PostMenuAction;
