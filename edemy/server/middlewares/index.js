import expressJWT from "express-jwt";

export const requireSignin = expressJWT({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
