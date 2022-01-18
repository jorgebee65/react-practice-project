import React from 'react';

const Account = ({ account }) => {
    return (
        <React.Fragment>
            <div className="">
                Tipo: {account.type}
                Saldo: {account.amount}
            </div>
        </React.Fragment>
    );
}

export default Account;