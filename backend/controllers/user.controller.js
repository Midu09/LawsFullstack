import Users from "../models/user.model.js";

// Lấy tất cả users
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users); // Sửa ở đây
  } catch (err) {
    console.error("Lỗi khi lấy thông tin:", err);
    res.status(500).json({ error: "Lỗi server" });
  }
};
//tao user Moi

export const createUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ error: "Thiếu thông tin bắt buộc." });
    }

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email đã được đăng ký." });
    }

    const newUser = new Users({ email, username, password });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("❌ Lỗi khi tạo người dùng:", error.message);
    res.status(500).json({ error: "Đã xảy ra lỗi khi tạo người dùng." });
  }
};
/// Delete user

export const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("da xoa thanh xong");
    console.log(user);
  } catch (error) {
    console.error("❌ Lỗi khi xoa người dùng:", error.message);
    res.status(500).json({ error: "da xay ra loi khi xoa." });
  }
};

///get user

export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Lỗi khi lay thong tin nguoi dung:", error.message);
    res.status(500).json({ error: "da xay ra loi khi lay nguoi dung." });
  }
};
