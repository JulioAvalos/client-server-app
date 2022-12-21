import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Customers from "../pages/Customers";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthContext";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";

function Navigation() {

    const {auth, verificaToken} = useContext(AuthContext);

    useEffect(() => {
        verificaToken();
    }, [verificaToken]);

    if (auth.checking) {
        return <h1>Espere por favor...</h1>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute isAuthenticated={auth.logged}>
                        <Login/>
                    </PublicRoute>
                }></Route>
                <Route path="/customers" element={
                    <PrivateRoute isAuthenticated={auth.logged}>
                        <Customers/>
                    </PrivateRoute>
                }></Route>
                <Route path='/' element={<Login/>}/>
                <Route path='/*' element={<Navigate to='/' replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
