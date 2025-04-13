import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
const PostPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Tat Ca Bai Viet</h1>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="bg-pink-300 mb-6 px-4 py-2 rounded-2xl md:hidden"
      >
        {openMenu ? "X" : "Tìm kiếm nâng cao"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${openMenu ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
