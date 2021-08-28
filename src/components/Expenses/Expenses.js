import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map(({ title, amount, date }) => (
        <ExpenseItem title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
}

export default Expenses;
