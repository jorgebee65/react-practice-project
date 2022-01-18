import React, { useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AppContext from "../context/AppContext";

const CreateAccount = () => {

    let navigate = useNavigate();

    const form = useRef(null);
    const { state, saveNewAccount } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);

        //Set values into the Object
        const data = {
            id: 3, //TODO Autogenerar el numero maximo
            type: formData.get('type'),
            maxAmount: formData.get('max-amount'),
            numberRef: formData.get('clabe'),
            name: formData.get('alias'),
        }
        console.log(data);
        saveNewAccount(data);
        navigate('/transferir');
    }

    return (
        <React.Fragment>
            <h1>Alta de Cuenta CitiBanamex</h1>
            <form action="" ref={form}>
                <label htmlFor="type">Que dato tienes de la cuenta para darla de alta.</label>
                <select name="type" >
                    {state.accountTypes.map((option) => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
                <label htmlFor="clabe">Clabe Interbancaria.</label>
                <input type="text" name="clabe" required></input>

                <label htmlFor="alias">Nombre con el que identificas este pago (alias).</label>
                <input type="text" name="alias" required></input>

                <label htmlFor="max-amount">Monto Maximo que autorizas a pagar a este beneficiario.</label>
                <input type="text" name="max-amount" required></input>

                <button type="button" onClick={handleSubmit}>Continuar</button>
            </form>
        </React.Fragment>
    );
}

export default CreateAccount;