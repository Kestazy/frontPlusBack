import React, { useState } from 'react'
import transactionsService from '../services/transactionsServices'

const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');


    const setInfo = e => {
        e.preventDefault();

        const NewTransaction = {
            text: text,
            amount: amount,
            user: '64954311c17e572a69613640'
        }
        transactionsService.setTransaction(NewTransaction);

        setText('');
        setAmount('');
    }

    return (
        <form onSubmit={setInfo}>
            <div>
                <label htmlFor="text">Pajamu / islaidu aprasymas</label>
                <input
                type='text'
                name='text'
                id='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='amount'>Suma</label>
                <input
                type='text'
                name='amount'
                id='amount'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
            <button>Patvirtinti</button>
        </form>
    )
}

export default NewTransaction
