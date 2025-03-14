import ExpenseData from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem (props){
    
    return(
        <div className="expense-item">
           <ExpenseData date={props.date}/>
            <div className="expense-item__description ">
                <h2>{props.title}</h2>
            </div >
            <div expense-item__price>{props.amount}</div>
        </div>
    )
} 