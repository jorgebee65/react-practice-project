import React, { useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AppContext from "../context/AppContext";
import { NavLink } from 'react-router-dom';

const Transaction = () => {
    let navigate = useNavigate();
    const form = useRef(null);
    const { state, saveTransaction } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        //Search by Id
        const formOrigin = state.accountsOrigin.find(x => x.id == formData.get('originAccount'));
        const formDest = state.accountsDest.find(x => x.id == formData.get('destAccount'));
        //Set values into the Object
        const data = {
            origin: formOrigin,
            dest: formDest,
            amount: formData.get('amount'),
        }
        console.log(data);
        saveTransaction(data);
        navigate('/verificar');
    }

    return (
        <React.Fragment>
            <h2>Transaccion</h2>
            <NavLink to="/alta">Dar de Alta</NavLink>
            <form action="" ref={form}>
                <label htmlFor="originAccount">Cuenta de Origen</label>
                <select name="originAccount" >
                    {state.accountsOrigin.map((option) => (
                        <option key={option.id} value={option.id}>{option.type} - {option.amount}</option>
                    ))}
                </select>
                <label htmlFor="destAccount">Cuenta de Destino</label>
                <select name="destAccount">
                    {state.accountsDest.map((option) => (
                        <option key={option.id} value={option.id}>{option.name} - {option.numberRef}</option>
                    ))}
                </select>
                    <label htmlFor="amount">Monto</label>
                    <input type="text" name="amount" required></input>
                <button type="button" onClick={handleSubmit}>Continuar</button>
            </form>

        </React.Fragment>
    );
}

export default Transaction;