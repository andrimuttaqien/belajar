import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
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
