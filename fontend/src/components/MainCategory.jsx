import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const MainCategory = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-2">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/post"
          className="bg-blue-300 text-white rounded-full px-4 py-2"
        >
          All Post
        </Link>
        <Link
          to="/post?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Hiến pháp & Luật
        </Link>
        <Link
          to="/post?cat=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Nghị định & Pháp lệnh
        </Link>
        {/* <Link
          to="/post?cat=databases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Thông tư & Quyết định
        </Link> */}

        {/* <Link
          to="/post?cat=maketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Công văn - Hướng dẫn
        </Link> */}
        <select>
          <option>
            <Link
              to="/post?cat=databases"
              className="hover:bg-blue-50 rounded-full px-4 py-2"
            >
              Thông tư & Quyết định
            </Link>
          </option>
          <option>
            <Link
              to="/post?cat=maketing"
              className="hover:bg-blue-50 rounded-full px-4 py-2"
            >
              Công văn - Hướng dẫn
            </Link>
          </option>
          <option>
            <Link
              to="/post?cat=maketing"
              className="hover:bg-blue-50 rounded-full px-4 py-2"
            >
              Văn bản địa phương
            </Link>
          </option>
        </select>
      </div>
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 ">
        <CiSearch />
        <input type="text" placeholder="" className="bg-transparent" />
      </div>
    </div>
  );
};

export default MainCategory;
