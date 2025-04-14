import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Gửi formData về server hoặc API tại đây
    console.log("Thông tin liên hệ:", formData);

    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto bg-transparent p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">
        Liên hệ để được tư vấn luật sư
      </h2>

      {submitted ? (
        <p className="text-green-600 font-medium">
          Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Họ và tên</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border-none rounded px-3 py-2"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label className="block font-medium">Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="w-full border-none rounded px-3 py-2"
              placeholder="nhap so dien thoai"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full border-none rounded px-3 py-2"
              placeholder="email..."
            />
          </div>

          <div>
            <label className="block font-medium">Nội dung cần tư vấn</label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              className="w-full border-none rounded px-3 py-2 h-32"
              placeholder="Vấn đề bạn đang gặp phải..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600  text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Gui
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
