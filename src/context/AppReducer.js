export default (state,action)=>{
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                // Creating new state
                ...state, // Returning inital state
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload) 
                // We have given type and payload as parameters in action in GlobalState so here what we are doing in transaction is
                // Return all the id which are different than action.payload's id and filter the same one
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state
        
    }
}