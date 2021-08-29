import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
  const chartDataPoint = months.map(month => ({ label: month, value: 0 }));

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoint[expenseMonth].value += expense.amount;
  }

  return (
    <Chart dataPoints={chartDataPoint}/>
  );
}

export default ExpensesChart;
