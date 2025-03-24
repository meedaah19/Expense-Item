import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import { useState } from 'react';

export default function Expenses({expenses}){
    const [filteredYear, setFilteredYear] = useState('2020');

    function filteredChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    return(
        <Card className="expenses">
            <ExpensesFilter selected= {filteredYear} onChangeFilter={filteredChangeHandler} />
                {expenses.map((expense) => (
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />))}          
        </Card>
    )
}