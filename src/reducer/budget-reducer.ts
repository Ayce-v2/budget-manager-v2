export type Expense = {
    id: number
    name: string
    cost: number
    isEssential: boolean

}

export type BudgetManagerState = {
    nameInput: string,
    costInput: number,
    isEssentialInput: boolean,

    unpaidExpenses: Expense[],
    paidExpenses: Expense[],

    totalCost: number

}

export type AddCostAction = {type:"ADD_COST"}
export type SetNameAction = {type:"SET_EXPENSE_NAME", payload:string};
export type SetCostAction = {type:"SET_COST", payload:number};
export type MarkEssentialAction = {type:"SET_IS_ESSENTIAL", payload:boolean};
export type MarkPaidAction = {type:"MARK_PAID", expId:number};
export type DeleteUnpaidExpenseAction = {type:"MARK_UNPAID_DELETE", deleteId:number};
export type DeletePaidExpenseAction = {type:"MARK_PAID_DELETE", deleteId:number};
export type BudgetManagerAction = AddCostAction | SetNameAction | SetCostAction | MarkEssentialAction | MarkPaidAction | DeleteUnpaidExpenseAction | DeletePaidExpenseAction;

export function budgetManagerReducer(state: BudgetManagerState, action: BudgetManagerAction): BudgetManagerState {
    const newState: BudgetManagerState = JSON.parse(JSON.stringify(state));

    switch(action.type) {

        case "ADD_COST": {
            const expense:Expense = {id: Math.random(), name: newState.nameInput, cost: newState.costInput, isEssential: newState.isEssentialInput};
            newState.unpaidExpenses.push(expense);
            newState.totalCost += expense.cost;
            return newState;
            

        }

        case "SET_EXPENSE_NAME": {
            newState.nameInput = action.payload;
            return newState;
            
        }

        case "SET_COST": {
            newState.costInput = action.payload;
            return newState;
            
        }

        case "SET_IS_ESSENTIAL": {
            newState.isEssentialInput = action.payload
            return newState;
            
        }

        case "MARK_PAID": {
            const expense: Expense | undefined = newState.unpaidExpenses.find(expense => expense.id === action.expId);
            if(!expense){
                return newState;
            }

            newState.unpaidExpenses = newState.unpaidExpenses.filter(expense => expense.id !== action.expId);

            newState.paidExpenses.push(expense);
            return newState;

            
        }

        case "MARK_UNPAID_DELETE": {
            const expense: Expense | undefined = newState.unpaidExpenses.find(expense => expense.id === action.deleteId);
            if(!expense){
                return newState;
            }

            newState.unpaidExpenses = newState.unpaidExpenses.filter(expense => expense.id !== action.deleteId);
            return newState;
            

        }

        case "MARK_PAID_DELETE": {
            const expense2: Expense | undefined = newState.paidExpenses.find(expense => expense.id === action.deleteId);
            if(!expense2){
                return newState;
            }
            newState.paidExpenses = newState.paidExpenses.filter(expense => expense.id !== action.deleteId);
            return newState;


        }

    }
}
