import React from "react"; 
import{ createContext,useReducer } from "react";
import AppReducer from './AppReducer';
 
// Initial State
const initalstate={
    transactions:[]
}

// Create Context
export const GlobalContext=createContext(initalstate)


//Provider Component so that other components can access the global state
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initalstate) // We need access to state and dispatch to call a reducer

    // Actions: They will make a call to reducer
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions, // Allows any component to access the transactions
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}