import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  //   console.log(req.body);
  //   res.json("Register user response from controllers");
  try {
    //   console.log(req.body)
    const { name, email, password } = req.body;
    // Validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 character");
    }
    let userEmailExist = await User.findOne({ email }).exec();
    if (userEmailExist) return res.status(400).send("Email already exist");
    // Hash password
    const hashedPassword = await hashPassword(password);
    // Save register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    // console.log("Saved User", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error, Try Again");
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    // Check if DB has user with that email
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send("No user found");
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send("Password invalid");
    // Create sign JWT
    const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // Return user and token to client, exclude hashed password
    user.password = undefined;
    // Send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only work on https
    });
    // Send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error try again");
  }
};

// export const logout = async (req, res) => {
//   try {
//     res.clearCookies("token");
//     return res.json({ message: "Sign out success" });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signout success" });
  } catch (err) {
    console.log(err);
  }
};
