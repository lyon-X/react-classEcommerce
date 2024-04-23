import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { swal } from "sweet-alert";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRePwd] = useState("");
  const [checkPwd, setCheckPwd] = useState(false);
  const [checkPwdTwo, setCheckPwdTwo] = useState(false);
  const [isLogged, setIsLoggedIn] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [errMsgHandler, setErrMsgHandler] = useState(false);
  const togglePwd = () => {
    setCheckPwd((prev) => !prev);
  };
  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const togglePwdTwo = () => {
    setCheckPwdTwo((prev) => !prev);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || pwd == "" || repwd == "") {
      setErrMsg("ALlfields are required");
      setErrMsgHandler(true);
      setTimeout(() => {
        setErrMsg("");
        setErrMsgHandler(false);
      }, 1000);
    } else if (pwd !== repwd) {
      setErrMsg("Password mixMatched");
      setErrMsgHandler(true);
      setTimeout(() => {
        setErrMsg("");
        setErrMsgHandler(false);
      }, 1000);
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pwd", pwd);
      localStorage.setItem("auth", email);
      window.location.href = "/";
    }
  };

  const LoginUser = (e) => {
    e.preventDefault();
    const local_email = localStorage.getItem("email");
    const local_Pwd = localStorage.getItem("pwd");
    if (email == "" || pwd == "") {
      setErrMsg("All Fields are required");
      setErrMsgHandler(true);
      setTimeout(() => {
        setErrMsg("");
        setErrMsgHandler(false);
      }, 1000);
    } else if (email !== local_email) {
      setErrMsg("User does not Exist");
      setErrMsgHandler(true);
      setTimeout(() => {
        setErrMsg("");
        setErrMsgHandler(false);
      }, 1000);
    } else if (pwd !== local_Pwd) {
      setErrMsg("Incorrect password or user does not exist");
      setErrMsgHandler(true);
      setTimeout(() => {
        setErrMsg("");
        setErrMsgHandler(false);
      }, 1000);
    } else {
      localStorage.setItem("auth", email);
      window.location.href = "/";
    }
  };
  return (
    <div className="myForm">
      <form>
        <h1>
          {isLogged ? "Login Form With React" : "Registration Form With React"}
        </h1>

        {errMsgHandler && (
          <p
            style={{
              background: "red",
              color: "white",
              fontSize: 20,
              width: "90%",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            {errMsg}
          </p>
        )}

        {!isLogged && (
          <input
            type="text"
            name=""
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full name"
            id=""
          />
        )}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name=""
          placeholder="Enter Email"
          id=""
        />
        <div className="eye">
          <input
            type={checkPwd ? "text" : "password"}
            onChange={(e) => setPwd(e.target.value)}
            name=""
            placeholder="Enter password"
            id=""
          />
          {checkPwd ? (
            <FaEye id="ic" onClick={togglePwd} />
          ) : (
            <FaEyeSlash id="ic" onClick={togglePwd} />
          )}
        </div>
        {isLogged ? (
          ""
        ) : (
          <div className="eye">
            <input
              type={checkPwdTwo ? "text" : "password"}
              onChange={(e) => setRePwd(e.target.value)}
              name=""
              placeholder="Enter Confirm password"
              id=""
            />
            {checkPwdTwo ? (
              <FaEye id="ic" onClick={togglePwdTwo} />
            ) : (
              <FaEyeSlash id="ic" onClick={togglePwdTwo} />
            )}
          </div>
        )}
        {isLogged ? (
          <button onClick={LoginUser}>Login</button>
        ) : (
          <button onClick={submitForm}>Register</button>
        )}
        {isLogged ? (
          <small>
            Dont have an account?{" "}
            <a href="#" onClick={toggleLogin}>
              Register Here
            </a>
          </small>
        ) : (
          <small>
            Already have an account?{" "}
            <a href="#" onClick={toggleLogin}>
              Login Here
            </a>
          </small>
        )}
      </form>
    </div>
  );
}

export default MyForm;
