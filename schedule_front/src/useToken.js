import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    //const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.userid;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    //localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.userid);
  };

  return {
    setToken: saveToken,
    token,
  };
}
