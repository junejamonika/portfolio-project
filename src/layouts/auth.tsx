import { Routes, Route } from "react-router-dom";
import SignIn from "../views/sign-in";

export function Auth() {

  return (
    <div className="relative min-h-screen w-full">
        <SignIn/>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
