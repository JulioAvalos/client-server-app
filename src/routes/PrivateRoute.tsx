import {Navigate} from 'react-router-dom'

export const PrivateRoute = ({children, isAuthenticated}: any) => {
    if (!isAuthenticated) {
        return <Navigate to='/' replace/>;
    }
    return children;
}
