import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setText('')
        setAmount(0)
    }

    return (
        <div>
            <h3 className='textcenter'>Add new Transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} required onChange={(e) => { setText(e.target.value) }} placeholder='Enter Text' />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" required placeholder='Enter Amount' value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                </div>
                <button className="btn" >Add Transaction</button>
            </form>
        </div>
    )
}
