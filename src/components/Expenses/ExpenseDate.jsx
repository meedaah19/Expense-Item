import './ExpenseDate.css';;

export default function ExpenseData(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className='expense-date'>
             <div>
                <div className='expense-date__month'>{month}</div >
                <div className='expense-date__day'>{day}</div >
                <div className='expense-date__year'>{year}</div >
            </div>
        </div>
    )
}