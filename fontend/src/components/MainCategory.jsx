import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const MainCategory = () => {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value) navigate(value);
  };
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-2">
      <div className="flex-1 flex items-center justify-between flex-wrap">
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

        <select
          onChange={handleSelect}
          className="rounded-full px-4 py-2 border border-gray-200"
        >
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
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2 ">
        <CiSearch />
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default MainCategory;
