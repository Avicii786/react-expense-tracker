import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import { Transaction } from './Transaction'







export const TranscationList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className='textcenter'>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}
