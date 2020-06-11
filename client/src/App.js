import React from "react";
import "./App.css";
import LandingPage from "./pages/landingpage/landingpage";
import {GlobalProvider} from "./context/globalstates";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <LandingPage />
      </GlobalProvider>
    </div>
  );
}

export default App;
