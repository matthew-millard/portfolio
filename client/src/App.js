import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/container";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
