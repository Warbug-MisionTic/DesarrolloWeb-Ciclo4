import React from "react";
import {Link} from "react-router-dom";


function Sidebars(){
    return(
            <div className="sideBar">
                <h4>Productos </h4>
                <li><Link className="productLink" to="juandiego">Juan Diego</Link></li>
                <li><Link className="productLink" to="andres">Andres</Link></li>      
            </div>  
            
        
    )
}
export default Sidebars;