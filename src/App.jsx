import React from "react";
import ProtectedRoute from "./components/protectedRoute";
import LanguageSwitcher from "./components/languageSwitcher";
import { Toaster } from "react-hot-toast";
import Routes from "./config/router";

function App() {
  return (
    <>
      <LanguageSwitcher />
      <Toaster position="bottom-left" reverseOrder={false} />
      <Routes />
    </>
  );
}

export default App;
