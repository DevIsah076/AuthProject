import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div"> & {}) {
  const [formData, setFormaData] = useState({ email: "", password: "" });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormaData({ ...formData, email: e.target.value });
                  }}
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  value={formData.password}
                  onChange={(e) => {
                    setFormaData({ ...formData, password: e.target.value });
                  }}
                  id="password"
                  type="password"
                  required
                />
              </Field>
              <Field>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    
                   signInWithEmailAndPassword(
                      auth,
                      formData.email,
                      formData.password,
                    )
                      .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log(user);

                        toast.success("Logged in successfully!");
                        // ...
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;

                        toast.error(`Error ${errorCode}: ${errorMessage}`);
                      });
                  }}
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();

                    signInWithPopup(auth, provider)
                      .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential =
                          GoogleAuthProvider.credentialFromResult(result);
                        const token = credential!.accessToken;
                        // The signed-in user info.
                        const user = result.user;

                        console.log(user);
                        toast.success("Logged in successfully!");
                        console.log(token);
                        // IdP data available using getAdditionalUserInfo(result)
                        // ...
                      })
                      .catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential =
                          GoogleAuthProvider.credentialFromError(error);
                        // ...

                        toast.error(`Error ${errorCode}: ${errorMessage}`);
                        console.log(credential);
                        console.log(email);
                      });
                  }}
                  variant="outline"
                  type="button"
                >
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
