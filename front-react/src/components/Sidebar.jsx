import React from "react";
import {products} from "../jsons/products.json";


function Sidebars(){
    return(
            <div className="sideBar">
                <h4>Productos</h4>
                <ul className="sidebarList">
                    <div><li className="row"> Acer    </li></div>
                    <div><li className="row"> Lenovo  </li></div>
                    <div><li className="row"> Dell    </li></div> 
                    <div><li className="row"> HP    </li></div> 
                    <div><li className="row"> Asus    </li></div> 
                </ul>
            </div>  
            
        
    )
}
export default Sidebars;