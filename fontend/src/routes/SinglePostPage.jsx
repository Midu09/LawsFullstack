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
            Thủ tục đăng ký kết hôn năm 2025: Hồ sơ, điều kiện là gì?
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
            Khi đăng ký kết hôn thì cần đáp ứng những điều kiện pháp lý nào ? Độ
            tuổi đăng ký kết hôn với Nam và Nữ hiện nay ? Những trường hợp nào
            thuộc diện cấm kết hôn (kết hôn trái luật) ? và một số pháp lý khác
            liên quan đến điều kiện kết hôn sẽ được luật sư giải đáp cụ thể:
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Images
            src="dangkykethon.jpg"
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
            Hôn nhân là một vấn đề quan trọng, đó là sự tự nguyện đến với nhau
            của các bên và việc đăng ký kết hôn là một nội dung cũng rất quan
            trọng trong một cuộc hôn nhân. Nêu hai bên đến với nhau bằng tình
            yêu thì đăng ký kết hôn sẽ là bằng chứng cho tình yêu đó được nhà
            nước chứng nhận.
          </p>
          <p>
            Vì vậy để có một cuộc hôn nhân hạnh phúc, để các bên có trách nhiệm
            với nhau hơn thì khi kết hôn thì phải đi đăng ký. Về thủ tục đăng ký
            kết hôn sẽ bao gồm những nội dung cơ bản sau: 1.1 Hồ sơ, thủ tục
            đăng ký kết hôn Khi đi đăng ký kết hôn thì các cặp đôi cần chuẩn bị
            các loại giấy tờ sau: Bản sao sổ hộ khẩu; Bản sao Chứng minh nhân
            dân; Giấy chứng nhận tình trạng hôn nhân của phường xã, thị trấn
            thường trú; Nếu như một trong hai bên đã kết hôn một lần rồi thì
            phải có giấy chứng nhận của tòa án là đã ly hôn. Kèm theo đó là giấy
            chứng nhận tình trạng hôn nhân của địa phương. Về thủ tục đăng ký
            kết hôn thì được quy định như sau:
          </p>
          <p>
            + Thứ nhất, khi đăng ký kết hôn, hai bên nam, nữ phải có mặt. Đại
            diện Ủy ban nhân dân cấp xã yêu cầu hai bên cho biết ý muốn tự
            nguyện kết hôn, nếu hai bên đồng ý kết hôn, thì cán bộ Tư pháp hộ
            tịch ghi vào sổ đăng ký kết hôn và Giấy chứng nhận kết hôn. Sau khi
            hai bên nam, nữ ký vào Giấy chứng nhận kết hôn và Sổ đăng ký kết hôn
            thì Chủ tịch Ủy ban nhân dân cấp xã ký và cấp cho mỗi bên vợ, chồng
            một bản chính Giấy chứng nhận kết hôn, giải thích cho hai bên về
            quyền và nghĩa vụ của vợ, chồng theo quy định của Luật Hôn nhân và
            gia đình năm 2014. Bản sao Giấy chứng nhận kết hôn được cấp theo yêu
            cầu của vợ, chồng. + Thứ hai, đối với thủ tục kết hôn đối với những
            người có địa chỉ thường trú trên hộ khẩu ở tỉnh, thành phố khác
            nhưng có mong muốn đăng ký kết hôn tại tỉnh khác thì hoàn toàn có
            thể thực hiện. Căn cứ Điều 17 Nghị định 158/2005/NĐ-CP quy định địa
            điểm đăng ký như sau: “Ủy ban nhân dân cấp xã, nơi cư trú của bên
            nam hoặc bên nữ thực hiện việc đăng ký kết hôn”. Nơi cư trú ở đây
            được xác định là địa chỉ tạm trú hoặc thường trú. Vì vậy, để thực
            hiện thủ tục đăng ký kết hôn tại tỉnh đó thì một trong hai bạn phải
            có tạm trú ở tỉnh đó. + Thứ ba, trường hợp đăng ký kết hôn khác tỉnh
            (ngoài tỉnh). Trường hợp này các bên có thể đăng ký kết hôn khác
            tỉnh tại quê của chồng/vợ nhưng cần có giấy xác nhận tình trạng hôn
            nhân được nơi đăng ký hộ khẩu thường trú cấp. Căn cứ theo Điều 18
            Nghị định 158/2005/NĐ-CP về đăng ký và quản lý hộ tịch: “Khi một
            người cư trú tại xã, phường, thị trấn này, nhưng đăng ký kết hôn tại
            xã, phường, thị trấn khác, thì phải có xác nhận của Ủy ban nhân dân
            cấp xã, nơi cư trú về tình trạng hôn nhân của người đó”. 1.2 Điều
            kiện để đăng ký kết hôn: Căn cứ theo quy định của Luật Hôn nhân và
            gia đình 2014 thì điều kiện để đăng ký kết hôn được quy định như
            sau: Nam từ đủ 20 tuổi trở lên, nữ từ đủ 18 tuổi trở lên được xem là
            đủ tuổi kết hôn; Kết hôn tự nguyện và không thuộc các trường hợp cấm
            kết hôn theo luật định gồm: Không được kết hôn với người đang có vợ,
            có chồng; Người mất năng lực hành vi dân sự (tâm thần);
          </p>
          <p>
            Kết hôn giữa người có cùng dòng máu trực hệ, có họ hàng trong phạm
            vi ba đời; Đăng ký kết hôn giữa cha mẹ nuôi với con nuôi… 1.3 Một số
            vấn đề liên quan đến việc kết hôn: Thứ nhất, về thời gian có giấy
            chứng nhận kết hôn: Trong vòng 5-10 ngày, kể từ ngày nhận đủ giấy tờ
            hợp lệ, nếu xét thấy hai bên nam, nữ có đủ điều kiện kết hôn theo
            quy định của Luật Hôn nhân và gia đình, Ủy ban nhân dân cấp xã đăng
            ký kết hôn cho hai bên nam, nữ. Trong trường hợp cần phải xác minh,
            thời hạn nói trên được kéo dài thêm không quá 5 ngày. Khi hoàn thành
            thủ tục, Ủy ban phường (xã) sẽ cấp 2 bản đăng ký kết hôn, mỗi cô dâu
            và chú rể giữ một bản. Thứ hai, đối với hôn nhân đồng giới – Luật
            hôn nhân và gia đình 2014 bỏ quy định: “cấm kết hôn giữa những người
            cùng giới tính” nhưng vẫn “không thừa nhận hôn nhân giữa những người
            cùng giới tính”. Như vậy, khi quyết định tiến tới hôn nhân, bên cạnh
            đám cưới, việc tiến hành những thủ tục đăng ký kết hôn là điều cần
            thực hiện để vừa bảo đảm chấp hành theo đúng pháp luật vừa có cơ sở
            quan trọng cho việc vợ chồng kết thành một gia đình. 2. Đăng ký kết
            hôn tại nơi cư trú cần những thủ tục gì? Xin chào luật sư, tôi và
            chồng vì một vài lý do mà cả hai cùng rời xa nhà và vào sinh sống
            tại một tỉnh thành khác. Hộ khẩu của cả hai vẫn ở quê, vậy nếu chúng
            tôi muốn đăng ký tạm trú tại tỉnh thành nơi chuyển đến thì cần những
            thủ tục gì? Hai chúng tôi vẫn chưa đăng ký kết hôn vậy liệu có thể
            đăng ký tại nơi ở mới được không? Nếu không thể đăng ký kết hôn vậy
            sau này khi chúng tôi sinh con thì có cách nào để có thể đăng ký
            khai sinh cho cháu được không? Vì không hiểu nhiều về luật nên rất
            mong nhận được sự tư vấn giúp đỡ của các luật sư. Tôi xin chân thành
            cảm ơn!
          </p>
          <p>
            5. Anh em họ có thể kết hôn hay không? Chào luật sư: Em 23 tuổi, em
            có 1 chuyện xin ý kiến luật sư, xin luật sư cho em biết ạ. em và anh
            ấy yêu thương nhau nhiều lắm, muốn tiến hành hôn nhân, anh ấy định
            cư ở nước ngoài lâu rồi , 2 đứa em không cùng họ cha anh ấy và mẹ em
            là 2 anh em ruột. Vậy xin hỏi ý kiến luật sư em và anh ấy cưới nhau
            được không thưa luật sư? Luật sư tư vấn: Điều 5, khoản 2 Luật hôn
            nhân và gia đình năm 2014 có quy định về cấp kết hôn, ly hôn giả
            tạo, tảo hôn, cưỡng ép kết hôn, lừa dối kết hôn, cản trở việc kết
            hôn ... như trích dẫn ở phần trên. Theo đó, điểm d nêu trên được
            hướng dẫn tại khoản 18 điều 3 Luật này như sau:
            <span>
              Những người có họ trong phạm vi ba đời là những người cùng một gốc
              sinh ra gồm cha mẹ là đời thứ nhất; anh, chị, em cùng cha mẹ, cùng
              cha khác mẹ, cùng mẹ khác cha là đời thứ hai; anh, chị, em con
              chú, con bác, con cô, con cậu, con dì là đời thứ ba
            </span>
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
                src="userAvt.jpg"
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
