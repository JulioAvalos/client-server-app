import {Navigate, Route} from 'react-router-dom'

export const PublicRoute = ({children, isAuthenticated}: any) => {
    if (isAuthenticated) {
        return <Navigate to='/' replace/>;
    }
    return children;
}
