
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({
    user
}) => user && user.rol == 0 ? <Outlet /> : <Navigate to="/" />

export default PrivateRoutes;