// Nextjs & React
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Link from "next/link";
// Style Framework
import { Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";

export default function Login() {
  const [email, setEmail] = useState("andri@gmail.com");
  const [password, setPassword] = useState("andri@gmail.com");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`api/login`, {
        email,
        password,
      });
      console.log("Login Response", data);
      // setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
    // console.log("Register Response ", data);
  };
  return (
    <>
      <div className="p-5 mb-1 bg-light jumbotron text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold textJumbotron">Login</h1>
        </div>
      </div>
      <div className="container col-md-4 offset-md-4 pb-5 mt-3">
        <form onSubmit={handleSubmit}>
          <input
            type={"email"}
            className="form-control mb-4 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type={"password"}
            className="form-control mb-4 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-block btn-primary"
              disabled={!email || !password || loading}
            >
              {loading ? <SyncOutlined spin /> : "Login"}
            </button>
          </div>
        </form>
        <p className="text-center p-3">
          Not yet Registered ?{" "}
          <Link href={"/register"}>
            <a>Register</a>
          </Link>
        </p>
      </div>
    </>
  );
}
