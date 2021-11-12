import Page from "../components/Page";
import Field from "../components/Field";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { fetchJson } from "./api/api";
import { useRouter } from "next/router";

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: false });
    // await sleep(2000);
    // console.log("Should Submit : ", { email, password });
    try {
      const response = await fetchJson("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log("Sign : ", response);
      setStatus({ loading: false, error: false });
      router.push("/");
    } catch (err) {
      setStatus({ loading: false, error: true });
    }
  };

  return (
    <div>
      <Page title="Sign In">
        <form onSubmit={handleSubmit}>
          <Field label="E-mail">
            <Input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Field>
          <Field label="Password">
            <Input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Field>
          {status.error && <p className="text-red-600">Invalid Credential</p>}
          {status.loading ? (
            <p>Loading..</p>
          ) : (
            <Button type="submit">Sign</Button>
          )}
        </form>
      </Page>
    </div>
  );
}
