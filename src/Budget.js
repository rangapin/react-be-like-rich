import React, { Component } from 'react';
import './Budget.css';
class IncomeStream extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.amount}</td>
                <td>{this.props.frequency}</td>
        </tr>
        )
    }
}

class Expense  extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.amount}</td>
        </tr>
        )
    }
}

class Budget extends Component {
render() {
const IncomeStreamComponents = this.props.incomeStream.map(incomeStreamObject => {
    return (
        <IncomeStream {...incomeStreamObject} />
    )
})

const expenses = this.props.expenses.map(expenseObject => {
    return (
        <Expense {...expenseObject} />
    )
})


  return (
        <div className="Budget">
            <h1>Budget</h1>
            <div>
                <h2>Income Streams</h2>
                <table>
                <thead>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Frequency</th>
                </thead>
                <tbody>
        {IncomeStreamComponents}
                    <tr>
                        <td>Paycheck</td>
                        <td>$2000</td>
                        <td>2</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div>
                <h2>Expenses</h2>
                <table>
                <thead>
                    <th>Name</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                {expenses}
                </tbody>
                </table>
        </div>
        </div>
   );
  }
}

export default Budget;