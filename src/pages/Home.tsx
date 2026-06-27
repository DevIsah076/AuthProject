import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("https://tr2mkxsx-3005.uks1.devtunnels.ms/Get/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   name: "Isah",
      //   email: "isahmukhtar535@gmail.com",
      //   password: "Isah076"
      // }),
      
    })
    .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <h1 className="text-lg pl-96 text-center  text-green-500">
      Hello we are logged in
    </h1>
  );
}
