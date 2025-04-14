import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

export default router;
