import { Button } from "antd";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
export default function Register() {
  const [name, setName] = useState("Andri");
  const [email, setEmail] = useState("andri@gmail.com");
  const [password, setPassword] = useState("andri@gmail.com");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name,
          email,
          password,
        }
      );
      toast.success("Registration succesfull, please login");
      setLoading(false);
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
          <h1 className="display-5 fw-bold textJumbotron">Register</h1>
        </div>
      </div>
      <div className="container col-md-4 offset-md-4 pb-5 mt-3">
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            className="form-control mb-4 p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
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
              disabled={!name || !email || !password || loading}
            >
              {loading ? <SyncOutlined spin /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
