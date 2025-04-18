import Images from "./Images";
import { Link } from "react-router-dom";
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 ">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Images src="sodo.jpg" className="rounded-3xl object-cover" />
        {/* detail */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg ">01.</h1>
          <Link className="text-blue-400 cursor-pointer lg:text-lg">
            Hiến pháp & Luật
          </Link>
          <span className="text-gray-500 italic">2 ngày trước</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Làm sổ đỏ bao nhiêu tiền 1m2 năm 2025? Phí làm sổ đỏ đất thổ cư?
        </Link>
      </div>
      {/* other */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <div className="flex justify-between gap-4 lg:h-1/3">
          <Images
            src="sodo.jpg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          ></Images>

          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4 ">
              <h1 className="font-semibold ">02.</h1>
              <Link className="text-blue-400">Nghị định & Pháp lệnh</Link>
              <span className="text-gray-500 text-sm italic">3 ngày trước</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Mẫu bản kiểm điểm học sinh không thuộc bài mới nhất
            </Link>
          </div>
        </div>
        {/* third */}

        <div className="flex justify-between gap-4 lg:h-1/3">
          <Images
            src="bankiemdiem.webp"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          ></Images>

          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4 ">
              <h1 className="font-semibold ">02.</h1>
              <Link className="text-blue-400">Nghị định & Pháp lệnh</Link>
              <span className="text-gray-500 text-sm italic">3 ngày trước</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Mẫu bản kiểm điểm học sinh không thuộc bài mới nhất
            </Link>
          </div>
        </div>
        {/* fourth */}

        <div className="flex justify-between gap-4 lg:h-1/3">
          <Images
            src="bankiemdiem.webp"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          ></Images>

          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4 ">
              <h1 className="font-semibold ">02.</h1>
              <Link className="text-blue-400">Nghị định & Pháp lệnh</Link>
              <span className="text-gray-500 text-sm italic">3 ngày trước</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Mẫu bản kiểm điểm học sinh không thuộc bài mới nhất
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
