import React, { useState } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetTable from './BudgetTable'

function App() {
  const [showHello, setShowHello] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const handleYesClick = () => {
    setShowHello(true);
    setShowTable(false);
  };

  const handleNoClick = () => {
    setShowHello(false);
    setShowTable(false);
  };

  const handleBudgetClick = () => {
    setShowHello(false);
    setShowTable(true);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="buttonWrapper">
          <button onClick={handleBudgetClick} className={`toggleButton yes ${showTable ? 'selected' : ''}`}>
            Budget
          </button>
          <button onClick={handleYesClick} className={`toggleButton no ${showHello && !showTable ? 'selected' : ''}`}>
            Expenses
          </button>
        </div>
        <div className="messageBox">
          {showHello && !showTable ? <p>Hello World</p> : null}
          {showTable ? <BudgetTable /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;