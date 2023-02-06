import { budgetManagerReducer, BudgetManagerState } from "../reducer/budget-reducer";

test("MARK_PAID", ()=>{
    const budgetManagerState: BudgetManagerState = {
        nameInput: "",
        costInput: 0,
        isEssentialInput: true,
    
        unpaidExpenses: [],
        paidExpenses: [],
    
        totalCost: 0
    }

    const nextState = budgetManagerReducer(budgetManagerState, {type:"MARK_PAID", expId:100});
    expect(nextState.unpaidExpenses.length).toBe(0);
    expect(nextState.paidExpenses.length).toBe(1);
})