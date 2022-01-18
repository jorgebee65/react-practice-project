import React, { useContext} from "react";
import Account from "../components/Account";
import AppContext from "../context/AppContext";

const Accounts = () => {

    const { state } = useContext(AppContext);

    return (
        <React.Fragment>
            <h2>Lista de Cuentas</h2>        
            {state.accountsOrigin.map( account => (
                <Account account={account} key={account.id} />
            ))}
        </React.Fragment>
    );
}

export default Accounts;