import {createContext, useCallback, useState} from "react";
import {fetchConToken, fetchSinToken} from "../api";
import jwtDecode, { JwtPayload } from "jwt-decode";
export const types = {
    usuariosCargados: '[Chat] Usuarios cargados',
    activarChat: '[Chat] Activar Chat',
    nuevoMensaje: '[Chat] Nuevo Mensaje',
    cargarMensajes: '[Chat] Cargar Mensajes',
    cerrarSesion: '[Chat] Borrar Chat'
}

export interface IAuthState {
    uid?: null | any;
    checking?: boolean;
    logged?: boolean;
    name?: string | null;
    email?: string | null;
}

export const AuthContext = createContext({} as any);

const initialState = {
    uid: null,
    checking: false,
    logged: false,
    name: null,
    email: null,
};

export const AuthProvider = ({children}: any) => {

    const [auth, setAuth] = useState<IAuthState>(initialState);

    // const { dispatch } = useContext(ChatContext);

    const login = async (email: any, password: any) => {
        const resp = await fetchSinToken("login", {email, password}, "POST");

        if (resp.ok) {
            localStorage.setItem("token", resp.token);
            const {usuario} = resp;
            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });
        }
        return resp.ok;

    };

    const register = async (nombre: any, email: any, password: any) => {
        const resp = await fetchSinToken("login/new", {nombre, email, password}, "POST");

        if (resp.ok) {
            localStorage.setItem("token", resp.token);
            const {usuario} = resp;
            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });
            return true;
        }

        return resp.msg;
    };

    const verificaToken = useCallback(async () => {
        const token = localStorage.getItem('token');


        // Si el token no existe
        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });

            return false;
        } else {
            const decoded: any = jwtDecode(token);
            console.log('decoded', decoded);
            if (Date.now() >= decoded.exp * 1000) {
                console.log('expired', decoded.exp)
            }
        }

        // const resp = await fetchConToken('login/renew');
        //
        // if (resp.ok) {
        //     localStorage.setItem("token", resp.token);
        //     const {usuario} = resp;
        //     setAuth({
        //         uid: usuario.uid,
        //         checking: false,
        //         logged: true,
        //         name: usuario.nombre,
        //         email: usuario.email,
        //     });
        //
        //     return true;
        // } else {
        //     setAuth({
        //         uid: null,
        //         checking: false,
        //         logged: false,
        //         name: null,
        //         email: null,
        //     });
        //
        //     return false;
        // }

    }, []);

    const logout = () => {
        localStorage.removeItem('token');

        // dispatch({type: types.cerrarSesion});

        setAuth({
            checking: false,
            logged: false
        });

    };

    return (
        <AuthContext.Provider
            value={{
                auth,
                login,
                register,
                verificaToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
