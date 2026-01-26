import "./App.css";

import Signup from "./pages/Signup";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import { Button } from "./components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "./lib/firebase";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState<{ email: string } | null>({ email: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({ email: firebaseUser.email! });

        // ...
      } else {
        // User is signed out

        setUser(null);
        // ...
        console.log("user is signed out");
      }
    });
  }, []);

  return (
    <>
      <div>
        <Button
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                toast.success("Logged out successfully!");
              })
              .catch((error) => {
                // An error happened.
                toast.error(`Error logging out: ${error.message}`);
              });
          }}
        >
          logout
        </Button>
      </div>

      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </>
  );
}

export default App;
