import cookie from "cookie";
function HandleLogout(req, res) {
  res
    .status(200)
    .setHeader(
      "Set-Cookie",
      cookie.serialize("jwt", "", {
        path: "/api",
        expires: new Date(0),
      })
    )
    .json({});
}
export default HandleLogout;
