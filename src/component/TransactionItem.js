import React,{ useContext} from 'react'
import {GlobalContext} from './../context/GlobalContext';

export const TransactionItem = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${transaction.amount}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
             </li> 
        </div>
    )
}
