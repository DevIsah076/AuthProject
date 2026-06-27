import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();
// import { serverTimestamp, doc, setDoc } from "firebase/firestore";
// import { database } from "@/lib/firebase";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [formdata, setFormData] = useState({ email: "", password: "" });

  // const handleSignup = async () => {
  //   // e.preventDefault();

  //   try{
  //     // 1. Create account
  //      const userCredential= createUserWithEmailAndPassword(
  //       auth,
  //       formdata.email,
  //       formdata.password,
  //     )

  //     // 2. Get UID
  //     const user = (await userCredential).user;
  //     console.log(user)
  //     // 3. Save to Firestore
  //     await setDoc(doc(database, "users", user.uid), {
  //       name: name,
  //       email: formdata.email,
  //       createdAt: serverTimestamp(),
  //     });

  //     toast.success("User created and saved to Firestore");
  //   } catch (error) {
  //     toast.error("Signup error:");
  //   }
  // };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => {
                  setFormData({ ...formdata, email: e.target.value });
                }}
              />     
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                onChange={(e) => {
                  setFormData({ ...formdata, password: e.target.value });
                }}
                type="password"
                required
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    createUserWithEmailAndPassword(
                      auth,
                      formdata.email,
                      formdata.password,
                    )
                      .then((userCredential) => {
                        // Signed up
                        const user = userCredential.user;
                        console.log(user);
                        // console.log(setDoc);
                        toast.success("Account created successfully!");
                      })

                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;

                        toast.error(`Error ${errorCode}: ${errorMessage}`);
                      });
                  }} 
                  type="submit"
                >
                  Create Account
                </Button>
                <Button
                  onClick={() => {
              

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
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link to="/">log in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
