import { GoogleLogin, googleLogout } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { googleAuth, login } from "../actions/userActions";

const Login = () => {
  const client_id =
    "824582615462-8o9sr8q9bp0efm2c87godlgurk9enqr3.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT token " + response.credential);
    const userObject = jwt_decode(response.credential);
    userObject.kind = "google";
    setUser(userObject);
    console.log(userObject);
  }

  const dispatch= useDispatch();

  // useEffect(() => {
  //   /*global google*/
  //   google.accounts.id.initialize({
  //     client_id,
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(

  //       document.getElementById("signInButton"),  
  //       {theme:"outline", size: "larage"}

  //     );

  //   google.accounts.id.prompt();

    
  // }, []);

  useEffect(() => {

    if (user.name) {
      dispatch(googleAuth(user.name, user.email));
    }
  }, [user]);

  // const googleSuccess = () => {
  //     // console.log("Login Success! current user: ", res.profileObj);
  // };

  const onFailureHandler = (res) => {
    console.log("Login Failed!: ", res);
  };
  return (
    <div id="signInButton">
      
    </div>
  );
};

export default Login;
