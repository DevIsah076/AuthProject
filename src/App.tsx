// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { LoginForm  } from "./components/login-form";
import Signup from "./Signup";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  <LoginForm />

  return (
    <>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
   </Routes>
    </> 
  );
}

export default App;
