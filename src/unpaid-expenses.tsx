import { Expense, BudgetManagerAction } from "./reducer/budget-reducer"

type UnpaidExpenseProps = {
    unpaidExpenses: Expense[]
    dispatch: React.Dispatch<BudgetManagerAction>
}

export function UnpaidExpensesList(props: UnpaidExpenseProps) {
    return <ol>
        {props.unpaidExpenses.map(e=> <li>{e.name} <b>Cost: {e.cost}</b>
        <button onClick={()=>props.dispatch({type:"MARK_PAID", expId:e.id})}>Mark Paid</button>
        <button onClick={()=>props.dispatch({type:"MARK_UNPAID_DELETE", deleteId:e.id})}>Delete</button></li>)}
    </ol>
}