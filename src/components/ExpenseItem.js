import './ExpenseItem.css'

export default function(){
    return(
        <div className="expense-item">
            <div>
                March 28th 2021
            </div >
            <div className="expense-item__description ">
                <h2>Car Insurance</h2>
            </div >
            <div expense-item__price>$294.99</div>
        </div>
    )
}