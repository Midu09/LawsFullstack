import Post from "../models/post.model.js";

// Lấy tất cả bài viết
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.error("Lỗi khi lấy danh sách bài viết:", err);
    res.status(500).json({ error: "Lỗi server" });
  }
};

// Lấy một bài viết theo slug
export const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });

    if (!post) {
      return res.status(404).json({ error: "Không tìm thấy bài viết" });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error("Lỗi khi lấy bài viết:", err);
    res.status(500).json({ error: "Lỗi server" });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.status(201).json(post); // 201 là mã chuẩn khi tạo thành công
  } catch (error) {
    console.error("Lỗi khi tạo bài viết:", error.message);
    res.status(500).json({ error: "Đã xảy ra lỗi khi tạo bài viết." });
  }
};

export const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.status(200).json("da xoa thanh xong");
};
