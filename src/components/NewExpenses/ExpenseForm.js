import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function handleTitle(event){
        setEnteredTitle(event.target.value)
    }
    function handleAmount(event){
        setEnteredAmount(event.target.value)
    }
    function handleDate(event){
        setEnteredDate(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();

        const ExpenseData = {
            title : enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(ExpenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={handleTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='50' step='10' onChange={handleAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2022-01-01' max='2026-12-31' onChange={handleDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                   <button type='submit'>Add Expense</button> 
                </div>
        </form>
        
    )
}