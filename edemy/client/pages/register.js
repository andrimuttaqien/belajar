import { Button } from "antd";
import { useState } from "react";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
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
          <div class="d-grid gap-2">
            <button type="submit" className="btn btn-block btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
