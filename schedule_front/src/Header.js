import "./Header.css";
const Header = () => {
  return (
    <header className="header_area">
      <div className="header_title">
        <div className="system_name">一周排班系统</div>
        <div className="header_user">
          用户:<span>王小二</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
