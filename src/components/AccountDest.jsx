import React from 'react';

const AccountsDest = ({ account }) => {
    return (
        <React.Fragment>
            <div className="">
                Tipo: {account.type}
                Nombre: {account.name}
                Numero de Cuenta: {account.numberRef}
            </div>
        </React.Fragment>
    );
}

export default AccountsDest;