import React, { Component } from 'react';
import './App.css';
import Budget from  './Budget.js';

const budget = {
  "incomeStream": [
      {
          "name": "Paycheck",
          "amount": 2000,
          "frequency": "2",
      },
  ],
  "expenses": [
      {
          "name": "Paycheck",
          "amount": 2000,
      },
      {
          "name": "Mortgage",
          "amount": 1000,
      },
      {
          "name": "Internet",
          "amount": 60,
      },
      {
          "name": "Liquor",
          "amount": 400,
      },
  ]
}
class App extends Component {
render() {
  return (
    <div className="App">
      <Budget  {...budget} />
    </div>
   );
  }
}

export default App;
