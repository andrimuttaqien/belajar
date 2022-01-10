import express from "express";
const router = express.Router();

// Middleware
import { requireSignin } from "../middlewares";

// Controllers
import { register, login, logout, currentUser } from "../controllers/auth";
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
module.exports = router;
