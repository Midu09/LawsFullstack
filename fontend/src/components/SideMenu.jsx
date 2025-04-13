import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="px4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Tìm kiếm</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Chọn lọc nội dung</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="moinhat"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-red-400"
          />
          Mới nhất
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="noibat"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-red-400"
          />
          Bài viết nổi bật
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-red-400"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="cunhat"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-red-400"
          />
          Bài viết cũ nhất
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Danh mục</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link
          to="/posts"
          className="bg-blue-300 text-white rounded-full px-4 py-2"
        >
          Tất cả
        </Link>
        <Link
          to="/posts?cat=hienphap&phapluat"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Hiến pháp & Luật
        </Link>
        <Link
          to="/posts?cat=nghidinh&phaplenh"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Nghị định & Pháp lệnh
        </Link>

        <select className="rounded-full px-4 py-2 border border-gray-200">
          <option value="">Danh mục khác...</option>
          <option value="/posts?cat=thongtu&quyetdinh">
            Thông tư & Quyết định
          </option>
          <option value="/posts?cat=congvan&huongdan">
            Công văn - Hướng dẫn
          </option>
          <option value="/posts?cat=vanbandiaphuong">Văn bản địa phương</option>
        </select>
      </div>
    </div>
  );
};

export default SideMenu;
