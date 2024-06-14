import React, { useState } from "react";
import Profile from "./Components/Profile";

const App = () => {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Ahmed",
    age: 20,
    Profession: "Web Developer",
  });

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      <Profile />
      {/* <button onClick={showHandler}> {show ? "Hide" : "Show"} </button> */}
    </div>
  );
};

export default App;
