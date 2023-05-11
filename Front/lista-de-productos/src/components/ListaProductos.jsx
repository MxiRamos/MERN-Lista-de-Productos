import { Link } from "react-router-dom"
import Producto from "./Producto"
import { useEffect, useState } from "react"
import axios from "axios"


function ListaProductos(){

    const [dataProductos, setDataProductos] = useState([]) // dataProductos se le asigna un array vacio

    useEffect(() => { // cambia cuando se agrega un producto
        axios.get('api/productos') // obtengo la lista de productos del backend
            .then(res =>{
                console.log(res.data)
                setDataProductos(res.data) // asigno la lista del backen al array dataProductos del useState
            }).catch(err => { // si ocurre un error lo muestra
                console.log(err)
            })
    }, [])

    return(
        <div className="row " id="div2">
        <div className="col-lg-8 offset-lg-2" >
            <div className="card" >
                <div className="card-body">
                    <span className="titulo">LISTA DE PRODUCTOS</span>
                        <Link to="/ingresarProducto">
                            <button className="btn btn-primary float-end">Ingresar Producto</button> 
                        </Link>
                        <table className="table table-bordered" >
                            <thead>
                                <tr>          
                                    <th scope="col">Producto</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Ubicacion</th>
                                    <th scope="col">Precio</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {dataProductos.map((producto) => ( // itero el array que se dio con useState (como el *NgFor en Angular)
                                    <Producto producto={producto}></Producto> // asigno cada producto al componente
                                ))}
                                

                            </tbody>
                        </table>                             
                </div>
            </div>
        </div>
    </div>
    )
}

export default ListaProductos