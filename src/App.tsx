// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Signup from "./Signup";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useDispatch } from "react-redux";
import { resetToken } from "./app/slice/authSlice";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Button
          onClick={() => {
            dispatch(resetToken());
          }}
        >
          logout
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
