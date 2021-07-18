import * as React from "react";
import fire, { auth } from "../utils/fire";
import styled from "styled-components";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase";

// const LoginForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .input-field {
//     margin: 1rem;
//   }

//   .error-field {
//     color: red;
//   }

//   img {
//     background: white;
//     width: 100%;
//   }
// `;

export const Login = () => {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [error, setError] = React.useState("");
  // const onLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       setError(err.message);
  //       switch (err.code) {
  //         case "auth/user-not-found":
  //         case "auth/invalid-email":
  //           setEmail("");
  //           setError(`Incorrect email address, please try again.`);
  //           break;
  //         case "auth/wrong-password":
  //           setPassword("");
  //           setError(`Wrong password, please try again.`);
  //           break;
  //         case "auth/network-request-failed":
  //           setPassword("");
  //           setError(`You are offline, please try again later.`);
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  // };
  // const onSignUpClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   fire
  //     .auth()
  //     .
  //     .catch((err) => {
  //       setError(err.message);
  //       switch (err.code) {
  //         case "auth/user-not-found":
  //         case "auth/invalid-email":
  //           setEmail("");
  //           setError(`Incorrect email address, please try again.`);
  //           break;
  //         case "auth/wrong-password":
  //           setPassword("");
  //           setError(`Wrong password, please try again.`);
  //           break;
  //         case "auth/network-request-failed":
  //           setPassword("");
  //           setError(`You are offline, please try again later.`);
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  // };
  // return (
  //   <LoginForm>
  //     <div className="image-container">
  //       <img
  //         src="https://img.favpng.com/15/17/22/ship-cartoon-png-favpng-rNQYNJWJsuybcMwJRiNBSYDp9.jpg"
  //         alt="Battleships"
  //       />
  //     </div>
  //     <h1>Battleships</h1>
  //     <h5>Sean Barnard 2021</h5>
  //     <div className="input-field">
  //       <input
  //         type="email"
  //         placeholder="email address"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         autoFocus={true}
  //       />
  //     </div>
  //     <div className="input-field">
  //       <input
  //         type="password"
  //         placeholder="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </div>
  //     <div className="input-field">
  //       <button onClick={onLoginClick}>Log in</button>
  //       <button onClick={onSignUpClick}>Sign up</button>
  //     </div>
  //     <p className="error-field">{error}</p>
  //   </LoginForm>
  // );
};
