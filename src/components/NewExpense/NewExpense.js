import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpense) => {
    const newExpense = {
      ...enteredExpense,
      id: Math.random().toString()
    }

    props.onAddExpense(newExpense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
  );
}

export default NewExpense;
