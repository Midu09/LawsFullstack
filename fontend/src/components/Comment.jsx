import React from "react";
import Images from "./Images";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Images
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40px"
        />
        <span className="font-medium">Ngân Le</span>
        <span className="text-sm text-gray-400 italic">2 ngày trước</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quisquam.
        </p>
      </div>
    </div>
  );
};

export default Comment;
