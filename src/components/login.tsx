import { useState } from "react";
import { LoginForm } from "./login-form";

export default function Login() {
  const [token, setToken] = useState<string | null>("");

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm token={token} setToken={setToken} />
        <br />
      </div>
    </div>
  );
}
