import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@containers/Layout";
import Accounts from "@pages/Accounts";
import NotFound from "@pages/NotFound";
import Transaction from "@pages/Transaction";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Verificacion from "@pages/Verificacion";
import Confirmation from "@pages/Confirmation";
import CreateAccount from "@pages/CreateAccount";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={ initialState }>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Accounts />} />
                        <Route path="/transferir" element={<Transaction />} />
                        <Route path="/verificar" element={<Verificacion />} />
                        <Route path="/confirmar" element={<Confirmation />} />
                        <Route path="/alta" element={<CreateAccount />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;