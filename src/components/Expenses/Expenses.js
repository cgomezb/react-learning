import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterChange={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
