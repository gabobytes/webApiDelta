import React,{useState} from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Facturas = () => {
    const [todos, setTodos] = useState()
    const url = 'http://localhost:49828/api/factura'


    useEffect( () => {
   
        fetchApi()
      
       }, [] )


    const fetchApi = async () => {
        const response = await fetch(url)            
        const responseJSON = await response.json();
        setTodos(responseJSON)         
    }


    return(    

    <div className="App" class="container"> 

        <h3>Consulta de Facturas</h3>

        <p>Número de factura y cliente al que pertenece</p>

        <ul>
        {  !todos ? 'Cargando...' :
           todos.map( (todo, index)=>{
            return <li>
              
              
             <Link to={`/factura/${todo.numerofactura}`}> {todo.numerofactura} - {todo.nombrecliente}</Link>
                       
             </li>
          })
        }
        </ul> 
      </div>
    
    )

}

export default Facturas