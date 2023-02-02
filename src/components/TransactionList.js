import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import Transaction from './Transaction'
const TransactionList = () => {
  const {transactions}=useContext(GlobalContext) // const{transactions} same as doing
 // const context=useContext(GlobalContext) 
  //console.log(context.transactions), so we basically do destructuring
  return (
    <>
    <h3>History</h3>
      <ul className="list">
        {
          transactions.map(transaction=>(
            <Transaction key={transaction.id} transaction={transaction}/>
          ))
        }
      </ul>
    </>
  )
}

export default TransactionList
