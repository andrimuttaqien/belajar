import Page from "../components/Page";
import Field from "../components/Field";
import Input from "../components/Input";
import Button from "../components/Button";

import { useState } from "react";
import { useRouter } from "next/router";
import { useSignIn } from "../hooks/user";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInError, SignInLoading } = useSignIn();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const valid = await signIn(email, password);
    if (valid) {
      router.push("/");
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
          {signInError && <p className="text-red-600">Invalid Credential</p>}
          {SignInLoading ? (
            <p>Loading..</p>
          ) : (
            <Button type="submit">Sign</Button>
          )}
        </form>
      </Page>
    </div>
  );
}
