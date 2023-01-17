import React from "react";
import Signin from "./Signin";
const Login = require("./Login");
var userExist = false;
function App() {
  //  var userExist = false;

  return <div>{userExist ? <Login /> : <Signin />}</div>;
}

//  export default App;
