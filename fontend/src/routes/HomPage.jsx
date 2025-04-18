import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { VscLaw } from "react-icons/vsc";
import MainCategory from "../components/MainCategory";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomPage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Trang Chủ</Link>
        <span className="flex justify-center mt-1">
          <IoIosArrowForward />
        </span>
        <span className="text-blue-600">Tin tức mới</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Đề xuất cho công chức làm việc từ xa, tăng chế độ nghỉ phép.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Bộ Nội vụ cho rằng, trong bối cảnh phát triển công nghệ thông
            tin,...
          </p>
        </div>
        <Link to="write" className="relative hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="tracking-widest text-lg animate-spin animationButton"
          >
            <path
              id="circlePath"
              fill="none"
              d=" M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Upload News
              </textPath>
            </text>
            <text>
              <textPath href="#circlePath" startOffset="50%">
                HUMG - VNU
              </textPath>
            </text>
          </svg>
          <button className="absolute text-3xl bg-pink-200 rounded-full flex items-center justify-center  top-0 left-0 right-0 bottom-0 m-auto w-20 h-20">
            <VscLaw />
          </button>
        </Link>
      </div>

      {/* CateGORyMain */}
      <MainCategory />
      {/* Features\dPOST */}
      <FeaturedPosts />
      {/* PostList */}

      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Gần đây</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomPage;
