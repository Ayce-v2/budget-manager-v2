import { budgetManagerReducer, BudgetManagerState } from "./reducer/budget-reducer"
import { useReducer } from "react"
import { UnpaidExpensesList } from "./unpaid-expenses";
import { PaidExpensesList } from "./paid-expenses";

const initialState: BudgetManagerState = {
    nameInput: "",
    costInput: 0,
    isEssentialInput: true,

    unpaidExpenses: [],
    paidExpenses: [],

    totalCost: 0
}


export function BudgetManager() {

    const [budgetState, dispatch] = useReducer(budgetManagerReducer, initialState);

    



    return <>

    <h1>Your Personal Budget Manager:</h1>

    <label htmlFor="expenseName">Input an Expense: </label>
    <input id="expenseName" type="text" placeholder="phone bill" onChange={e=>dispatch({type:"SET_EXPENSE_NAME", payload:e.target.value})}/>
   

    <label htmlFor="setCost">Input Price of the Expense</label>
    <input id="setCost" type="number" placeholder="100" onChange={e=>dispatch({type:"SET_COST", payload:Number(e.target.value)})}/>
    <button onClick={()=>dispatch({type:"ADD_COST"})}>Add Expense</button>

    <input id="essential" type="checkbox" onChange={e=>dispatch({type:"SET_IS_ESSENTIAL", payload:Boolean(e.target.value)})}/>
    <label htmlFor="essential">Essential</label>

    <h3>Unpaid Expenses</h3>
    <UnpaidExpensesList unpaidExpenses={budgetState.unpaidExpenses} dispatch={dispatch}/>

    <h3>Paid Expenses</h3>
    <PaidExpensesList paidExpenses={budgetState.paidExpenses} dispatch={dispatch}/>

    <h3>Cost of Unpaid and Paid Expenses</h3>
    <div>
        <h3>${budgetState.totalCost}</h3>
    </div>


    
    
    
    </>

}