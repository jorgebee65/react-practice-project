import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from "../context/AppContext";

const Verificacion = () => {
    let navigate = useNavigate();
    const { state, performTransaction } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        performTransaction();
        console.log(state)
        navigate('/confirmar');
    }

    return (
        <React.Fragment>
            <h2>Verificacion</h2>
            <h4>Cuenta de Retiro</h4>
            <div>{state.transfer.origin.type}</div>
            <div>{state.transfer.origin.name}</div>
            <div>{state.transfer.origin.amount}</div>

            <h4>Cuenta de deposito</h4>
            <div>{state.transfer.dest.name}</div>
            <div>{state.transfer.dest.numberRef}</div>

            <h4>Detalle de la Transferencia</h4>
            <div>Importe: {state.transfer.amount}</div>
            <div className="">Fecha de aplicacion: {new Date().toLocaleString("es-MX", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ""}</div>
            <div className="">Hora de aplicacion: Ahora</div>
            <div className="">Cuenta concentradora: No</div>
            <div className="">Descripcion para identificar la transferencia: </div>

            <button type="button" onClick={handleSubmit}>Aceptar</button>
        </React.Fragment>
    );
}

export default Verificacion;