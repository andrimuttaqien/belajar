import { fetchJson } from "./api";
import cookie from "cookie"
export default async function handleLogin(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  //   console.log("req.body:", req.body);
  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson("http://localhost:1337/auth/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    });
    //   console.log("CMS Response:", response);
    res
      .status(200)
        .setHeader(
          "Set-Cookie",
          cookie.serialize("jwt", jwt, {
            path: "/api",
            httpOnly: true,
          }))
      .json({
        id: user.id,
        name: user.username,
      });
  } catch (err) {
    req.status(401).end();
  }
}
