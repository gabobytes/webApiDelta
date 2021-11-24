import React,{useState} from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Factura = () => {
    const [items,SetItems] = useState()
    const url = `http://localhost:49828/api/factura/`

    useEffect( () => {   
        fetchApi()      
       }, [] )
    
    
       //getting params from URL
    var {factura} = useParams();

    const fetchApi = async () => {
        const response = await fetch(`http://localhost:49828/api/factura/${factura}`)    
        const responseJSON = await response.json();
        SetItems(responseJSON)           
        
    }


     
    return(

        <div class="alert alert-success">
           <h3>Detalles factura No. {factura}</h3>
           <p>Productos registrados en la factura:</p>
        <ul>
        {  !items ? 'Cargando...' :
           items.map( (item, index)=>{
            return <li>           
              
                 {item.producto}  
                       
             </li>
          })
        }          
        </ul> 
        </div>
    )
}

export default Factura