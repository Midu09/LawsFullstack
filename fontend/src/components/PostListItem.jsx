import React from "react";
import Images from "./Images";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* IMAGE SECTION */}
      <div className="w-full xl:w-1/3">
        <Images
          src="postImg.jpeg"
          className="rounded-2xl object-cover w-full h-64 xl:h-full"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="flex flex-col gap-4 w-full xl:w-2/3">
        <Link to="/test" className="text-2xl xl:text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
          <span>Đăng bởi</span>
          <Link className="text-blue-600">Ngan Le</Link>
          <span>trong</span>
          <Link className="text-blue-600">Hiến pháp & Luật</Link>
          <span className="text-gray-500 italic">2 ngày trước</span>
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae soluta explicabo dolor beatae accusantium asperiores quidem!
            Consectetur, placeat, sequi recusandae eum eos aspernatur dicta
            commodi modi alias minima magni.
          </p>
          <Link className="text-blue-600 underline text-sm">Xem thêm</Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
