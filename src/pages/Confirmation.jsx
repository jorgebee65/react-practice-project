import React, {useContext} from 'react';
import AppContext from "../context/AppContext";
import { NavLink } from 'react-router-dom';


const Confirmation = () => {
    const { state } = useContext(AppContext);
    console.log("confirmacion")
    console.log(state.accountsOrigin)
    console.log(state.accountsOrigin[0])
    return (
        <React.Fragment>
            <h1>Confirmación</h1>
            <h3>Tu transferencia ha sido aplicada</h3>
            <h4>Cuenta de Retiro</h4>
            <div>{state.accountsOrigin[0].type}</div>
            <div>{state.accountsOrigin[0].name}</div>
            <div>Disponible {state.accountsOrigin[0].amount}</div>

            <h4>Cuenta de deposito</h4>
            <div>{state.transfer.dest.name}</div>

            <h4>Detalle de la Transferencia</h4>
            <div>Importe: {state.transfer.amount}</div>
            <div className="">Fecha de aplicacion: {new Date().toLocaleString("es-MX", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ""}</div>
            <div className="">Hora de aplicacion: Ahora</div>
            <div className="">Cuenta concentradora: No</div>
            <div className="">Descripcion para identificar la transferencia: </div>

            <NavLink to="/">Hacer otra transferencia</NavLink>
        </React.Fragment>
    );
}

export default Confirmation;