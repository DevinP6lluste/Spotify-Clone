import React, { useEffect } from "react";
import "./App.css";
import Login from './Login';
import { getTokenFromUrl } from "./spotify";

function App() {

  // Run code based on given condition
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log('I have a token', token);
  }, []);

  return (
    // BEM
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
