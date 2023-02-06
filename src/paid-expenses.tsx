import { Expense, BudgetManagerAction } from "./reducer/budget-reducer"

type PaidExpenseProps = {
    paidExpenses: Expense[]
    dispatch: React.Dispatch<BudgetManagerAction>
}

export function PaidExpensesList(props: PaidExpenseProps) {
    
    return <ol>
        {props.paidExpenses.map(e=> <li>{e.name} <b>Cost: {e.cost}</b>
        <button onClick={()=>props.dispatch({type:"MARK_PAID_DELETE", deleteId:e.id})}>Delete</button></li>)}
    </ol>
}