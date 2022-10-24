import { Outlet, Link } from "react-router-dom";



const Modify = () => {
    return (
        <>
            <div className="sideBar">
                <Link className="productLink" to="juandiego">Juan Diego</Link>
                <Link className="productLink" to="andres">Andres</Link>      
            </div>      
            <Outlet />
        </>
    );
}

export default Modify;