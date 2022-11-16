import "./Login.css";
import "./knopf.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

async function loginUser(userInfo) {
  return fetch("http://localhost:8080/v1/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(userInfo),
  }).then((data) => data.json());
}

const Login = () => {
  const [formErrors, setFormErrors] = useState({
    error1: "",
    error2: "",
  });
  const userId = useRef();
  const passWord = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorObj = validate();
    if (errorObj.error1 !== "" || errorObj.error2 !== "") {
      setFormErrors(validate());
      return;
    }
    const token = await loginUser({
      userId: userId.current.value,
      password: passWord.current.value,
    });

    if (Object.keys(token).length === 0 || token.userid === "") {
      setFormErrors({ error1: "", error2: "用户名或密码不正确，请重新输入!" });
      return;
    }
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("loginStats", "1");
    navigate("/");
  };
  const validate = () => {
    const errors = { error1: "", error2: "" };
    if (!userId.current.value) {
      errors.error1 = "请输入用户名!";
    }
    if (!passWord.current.value) {
      errors.error2 = "请输入密码!";
    }

    return errors;
  };
  return (
    <div className="form_container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>一 周 排 班 系 统</h1>
        <hr />
        <div className="ui_form">
          <div className="form-field">
            <label>用户名</label>
            <input type="text" ref={userId}></input>
          </div>
          <p className="error_message">{formErrors["error1"]}</p>
          <div className="form-field">
            <label>密码</label>
            <input type="text" ref={passWord}></input>
          </div>
          <p className="error_message">{formErrors["error2"]}</p>
          <button className="knopf ">登录</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
