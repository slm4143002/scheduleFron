import "./Header.css";
import useToken from "./useToken";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  let [logoutState, setLogoutState] = useState(false);
  //const tokenObj = sessionStorage.getItem("token");

  function logout(e) {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("loginStats");
    setLogoutState(true);
  }

  useEffect(() => {
    if (logoutState) {
      navigate("/login");
    }
  });

  return (
    <header className="header_area">
      <div className="header_title">
        <div className="system_name">一周排班系统</div>
        <div className="header_user">
          <div className="header_logout">
            <div>
              用户:<span>{token?.username}</span>
            </div>
            <div>
              <button className="knopf pill small" onClick={(e) => logout(e)}>
                退出
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
