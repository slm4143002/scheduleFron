import IconMenu from "./IconMenu";
import Header from "./Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Entry = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const tokenObj = sessionStorage.getItem("token");
    if (!tokenObj) {
      navigate("/login");
    } else if (Object.keys(tokenObj).length === 0) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <IconMenu />
    </>
  );
};

export default Entry;
