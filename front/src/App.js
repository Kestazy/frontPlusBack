import React from "react";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";


function App() {
  return (
    <div>
      <NewTransaction />
      <Transactions />
    </div>
  );
}

export default App;
