import { useState } from "react";
import { anotherStyle, myStyle } from "../../styles/styleSheet";

function Home() {
  const logoutFunction = () => {
    localStorage.removeItem("auth");
    window.location.href = "/register";
  };
  const stlyeII = {
    color: "white",
    backgroundColor: "pink",
  };

  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };
  const user = localStorage.getItem("name");

  const [togglePopUp, setTogglePopUp] = useState(false);

  const popUpHandler = () => {
    setTogglePopUp((p) => !p);
  };
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button
        style={{
          background: "red",
          color: "white",
          border: "none",
          outline: "none",
          padding: "0.5rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={logoutFunction}
      >
        Logout
      </button>

      <button
        style={{
          background: "rgb(227, 227, 100)",
          marginLeft: "2rem",
          color: "white",
          border: "none",
          outline: "none",
          padding: "0.5rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={popUpHandler}
      >
        Delete my Account
      </button>

      {togglePopUp && (
        <div className="popUp">
          <h5>Are you sure you want to delete your account?</h5>
          <div className="pp">
            <button
              style={{
                background: "red",
                marginLeft: "2rem",
                color: "white",
                border: "none",
                outline: "none",
                padding: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                width: "200px",
                fontSize: 20,
              }}
              onClick={deleteAccount}
            >
              Yes
            </button>
            <button
              style={{
                background: "dodgerblue",
                marginLeft: "2rem",
                color: "white",
                border: "none",
                outline: "none",
                padding: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                width: "200px",
                fontSize: 20,
              }}
              onClick={popUpHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
