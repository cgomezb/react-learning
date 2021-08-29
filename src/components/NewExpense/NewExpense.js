import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = (enteredExpense) => {
    const newExpense = {
      ...enteredExpense,
      id: Math.random().toString()
    }

    props.onAddExpense(newExpense);
    setShowForm(false);
  }

  const addNewExpenseHandler = () => {
    setShowForm(true);
  }

  const cancelNewExpenseHandler = () => {
    setShowForm(false);
  }

  let newExpenseContent = <button onClick={addNewExpenseHandler}>Add New Expense</button>

  if (showForm) {
    newExpenseContent = <ExpenseForm 
      onSaveExpense={saveExpenseHandler}
      onCancelNewExpense={cancelNewExpenseHandler}/>
  }

  return (
    <div className="new-expense">
      {newExpenseContent}
    </div>
  );
}

export default NewExpense;
