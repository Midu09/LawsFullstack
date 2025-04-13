import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:h-3/5">
      <h1 className="text-xl text-gray-500 underline">Bình luận</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Binh luan tai day...."
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-300 px-4 py-3 text-white font-medium rounded-xl ">
          Gửi!
        </button>
      </div>
      <Comment />
    </div>
  );
};

export default Comments;
