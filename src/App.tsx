import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
// import { Button } from "./components/ui/button";
// import { signOut } from "firebase/auth";
// import { auth } from "./lib/firebase";
// import { toast } from "react-toastify";
// import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
// import { LoginForm } from "./components/login-form";
// import { Button } from "./components/ui/button";
import { LoginForm } from "./components/login-form";
import { Button } from "./components/ui/button";
import { useDispatch } from "react-redux";
import { resetToken } from "./app/slice/authSlice";
// import { SignupForm } from "./components/signup-form";00

function App() {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(resetToken());
  };

  return (
    <>
      <Button className="bg-black text-5xl" onClick={handleLogout}>
        Logout
      </Button>
      {token ? (
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
function dispatch(arg0: { payload: undefined; type: "auth/resetToken" }) {
  throw new Error("Function not implemented.");
}
