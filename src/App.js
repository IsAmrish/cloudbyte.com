import React from 'react';
import Home  from "./pages/home"

function App() {
  return (
    <div className="App" style={{ height: "100vh"}}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Home />
      </div>
    </div>
  );
}

export default App;
