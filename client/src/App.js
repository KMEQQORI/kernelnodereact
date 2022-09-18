import React from "react";
import NavBar from "./components/NavBar";
import MainFrame from "./components/MainFrame";
import { useAuth0 } from "./react-auth0-wrapper";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
        <MainFrame />
      </header>
    </div>
  );
}

export default App;
