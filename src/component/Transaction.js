import React,{ useContext } from 'react'
import {GlobalContext} from './../context/GlobalContext';
import {TransactionItem} from './TransactionItem';

export const Transaction = () => {

    const { transaction } = useContext(GlobalContext);
    

    return (
        <>
        <h3>History</h3>
         <ul id="list" className="list">
             { transaction.map(item => (<TransactionItem transaction={item} key={item.id} />)) }
      </ul>
      </>
    )
}
