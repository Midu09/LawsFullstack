import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Ban nen dang nhap truoc</div>;
  }
  return (
    <div className="md:h-[calc(100vh-80px)]  h-[calc(100vh-64px)] flex flex-col gap-6">
      <h1 className="text-clip font-light">Dang Bai</h1>
      <form className="flex flex-col gap-6  flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-400 bg-white">
          Them 1 hinh anh
        </button>
        <input
          className="text-4xl bg-transparent font-semibold outline-none"
          type="text"
          placeholder="Tieu de bai viet"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Chon mot label:
          </label>
          <select name="cat" className="p-2 rounded-xl bg-white shadow-sm">
            <option value="general">genneral</option>
            <option value="hienphap&luat">Hiến pháp & Luật</option>
            <option value="nghidinh&phaplenh">Nghị định & Pháp lệnh</option>
            <option value="thongtu&quyetdinh">Thông tư & Quyết định</option>
            <option value="congvan&huongdan">Công văn - Hướng dẫn</option>
            <option value="vanbandiaphuong">Văn bản địa phương</option>
          </select>
        </div>
        <textarea className="p-4 rounded-xl bg-white shadow-sm" name="desc">
          Mo ta ngan
        </textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-sm"
        />
        <button className="cursor-pointer bg-purple-400 w-max items-center justify-center my-auto mx-auto mt-20">
          Đăng Bài
        </button>
      </form>
    </div>
  );
};

export default Write;
