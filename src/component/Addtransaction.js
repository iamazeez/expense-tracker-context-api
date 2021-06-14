import React,{ useState, useContext } from 'react'
import {GlobalContext} from './../context/GlobalContext';

export const Addtransaction = () => {

    const { transaction, addTransaction} = useContext(GlobalContext);

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    function formSubmit(e){
        e.preventDefault();
        if(text == '' || amount == 0){
            alert('Please fill the form properly');
            return;
        }

        const id = transaction.length == 0 ? 1 : transaction[transaction.length -1].id +1;

        const newTransaction = {
            id,
            text,
            amount:amount*1
        }

        addTransaction(newTransaction);

    }

    return (
        <>
           <h3>Add new transaction</h3>
            <form onSubmit={formSubmit}>
                <div className="form-control">
                <label for="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label for="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
