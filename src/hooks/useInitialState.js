import React, { useState } from 'react';

const initialState = {
    accountTypes: [{
        id: 1,
        name: "Cuenta CLABE",
    }],
    transfer: {
        origin: null,
        dest: null,
        amount: 0
    },
    accountsOrigin: [{
        id: 1,
        type: "debit",
        name: "Chq Perfil Ejc. MXN -587",
        amount: 10000
    },
    {
        id: 2,
        type: "credit",
        name: "Credito Dorada. MXN -667",
        amount: 5000
    }],
    accountsDest: [{
        id: 1,
        type: 1,
        maxAmount: 5000,
        numberRef: "4152312450187361",
        name: "Peter Parker"
    },
    {
        id: 2,
        type: 1,
        maxAmount: 1000,
        numberRef: "0215420012541251251",
        name: "Otto Octavius"
    }],
}

const useInitialState = () => {
    const performTransaction = () => {
        let accounts =  state.accountsOrigin
        let accountToUpdate = state.transfer.origin;
        accountToUpdate.amount = accountToUpdate.amount - state.transfer.amount;
        //Find index to replace
        //const index = accounts.findIndex(fruit => fruit === "blueberries");
        accounts[0] = accountToUpdate
        setState({
            ... state,
            accountsOrigin: accounts
        })
    }
    const saveTransaction = (payload) => {
        setState({
            ... state,
            transfer: {
                origin: payload.origin,
                dest: payload.dest,
                amount: payload.amount,
            }
        })
    }
    const saveNewAccount = (payload) => {
        setState({
            ... state,
            accountsDest: [... state.accountsDest, payload]
        })

    }
    const [state, setState] = useState(initialState);
    return {
        state,
        saveTransaction,
        performTransaction,
        saveNewAccount,
    };
}

export default useInitialState;

