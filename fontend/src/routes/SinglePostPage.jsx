import { Link } from "react-router-dom";
import Images from "../components/Images";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-12 p-4 md:p-8 lg:px-16 max-w-7xl mx-auto">
      {/* detail */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/5 flex flex-col gap-6">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
            <span>Đăng bởi</span>
            <Link className="text-blue-500 hover:underline font-medium">
              Ngan Le
            </Link>
            <span>trong</span>
            <Link className="text-blue-500 hover:underline font-medium">
              Hiến pháp & Luật
            </Link>
            <p className="text-gray-400 italic ml-2">2 ngày trước</p>
          </div>
          <p className="text-base leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Images
            src="postImg.jpeg"
            w="600"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg gap-6 flex flex-col text-justify text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ab
            sit illo quis rerum velit similique vitae quaerat vel ipsam,
            asperiores, culpa ratione nostrum est quas eaque dolorum corrupti
            dolorem neque ullam qui nulla eveniet aspernatur. Sequi odio nobis
            quaerat, aliquam natus illo, perspiciatis veniam dolores error rem
            molestiae. Suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            asperiores nemo. Autem dignissimos, unde eius iure nostrum adipisci
            voluptatem consectetur enim, repudiandae illum esse, praesentium
            tempora earum incidunt magni consequatur nemo eum alias minima
            debitis. Animi laboriosam quaerat dignissimos consectetur, nesciunt
            obcaecati ipsam nihil porro iusto enim atque perferendis voluptates
            ipsa praesentium. Commodi totam in, quidem labore nulla expedita
            recusandae cum blanditiis nostrum dolore maiores amet nesciunt
            distinctio temporibus unde placeat, saepe nam cupiditate! Eligendi,
            qui porro. Iure illo mollitia porro voluptate delectus perspiciatis
            sed nemo obcaecati nulla? Nostrum velit doloremque sunt suscipit,
            fuga vitae possimus consectetur dignissimos excepturi ad
            exercitationem ipsam accusamus voluptatibus dolore, nam labore
            aperiam libero, error sequi. Laudantium maxime itaque voluptatibus
            consequatur reiciendis incidunt sequi totam atque voluptatem
            inventore. Quas harum suscipit quod, nostrum dolores at cupiditate
            maiores sint, iste voluptas, assumenda quo facere laboriosam saepe
            ea voluptatum. Labore nihil, maxime nemo cupiditate quod
            accusantium. Natus sint rem dicta praesentium exercitationem
            blanditiis error illo recusandae dolores quasi at odio quisquam
            dolor laboriosam perferendis in accusantium, amet sapiente, iure ea
            quos modi ab quia! Consequuntur sed est recusandae ducimus dolorem
            aperiam voluptatem maiores debitis iusto corporis a, voluptatibus
            aut provident reprehenderit minus accusantium, unde explicabo eius
            accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            voluptatum, laborum sequi reprehenderit pariatur minima corrupti,
            accusantium autem soluta est necessitatibus tempore porro quia odit
            repellendus id, animi corporis dolorem? Eligendi laboriosam dicta
            deleniti exercitationem quasi, non, debitis magni beatae
            consequuntur facere in amet rerum inventore aliquid dolorem
            assumenda aspernatur. Nobis accusantium tempore fugit praesentium
            dignissimos delectus, quaerat at laboriosam commodi amet dolorum
            officiis voluptatum quidem adipisci aut corrupti pariatur suscipit
            nam vel sequi numquam voluptatem? Facere beatae, illum dolor quis
            tenetur nam expedita dignissimos nostrum nulla veritatis blanditiis
            unde vel enim doloremque ad officia ipsam repellendus incidunt
            quidem facilis!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            maiores temporibus quisquam exercitationem aspernatur error officiis
            atque fugiat! Dolore rem minus aliquid deserunt nostrum deleniti
            cum, ipsam omnis iusto modi, ad beatae consequatur voluptate
            laborum, similique itaque minima voluptas ducimus. Sunt nulla
            voluptas nam officia, porro vero delectus voluptate temporibus,
            adipisci illo sint, consequatur dolore. Magni ab mollitia rerum
            tenetur aliquid modi voluptatibus rem iusto esse repellat nobis
            veritatis quas velit soluta ipsum minus, laudantium perferendis
            deserunt non laboriosam blanditiis dignissimos. Delectus mollitia
            velit illo dolorum culpa, beatae molestiae quam laudantium fugit.
            Rerum dolor incidunt sed nam dicta, sint delectus.
          </p>
        </div>

        {/* menu */}
        <div className="px-4 h-max sticky top-8 rounded-xl p-6 shadow-md w-full md:w-72">
          <h1 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
            Tác Giả
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Images
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-600 hover:underline font-medium">
                Ngan Le
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex gap-3 text-gray-500 text-lg">
              <Link className="hover:text-blue-600">
                <FaFacebook />
              </Link>
              <Link className="hover:text-pink-500">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <PostMenuAction />

          <h1 className="mt-8 mb-4 text-sm font-semibold text-gray-700 uppercase">
            Danh mục chủ đề:
          </h1>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {[
              "All",
              "Hiến pháp & Luật",
              "Nghị định & Pháp lệnh",
              "Thông tư & Quyết định",
              "Công văn - Hướng dẫn",
              "Văn bản địa phương",
            ].map((cat, idx) => (
              <Link
                key={idx}
                className="underline hover:text-blue-500 transition"
                to="/"
              >
                {cat}
              </Link>
            ))}
          </div>

          <h1 className="mt-8 mb-4 text-sm font-semibold text-gray-700 uppercase">
            Tìm Kiếm
          </h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
