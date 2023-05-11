import axios from "axios"
import { FaPencilAlt, FaTrash } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

function Producto({ producto }){ // obtiene producto de ListaProductos 

    const navegar = useNavigate()

    function borrarProducto(id){
        axios.delete(`/api/productos/${id}`)
            .then(res => {
                console.log(res.data)
                alert(res.data)
                navegar(0) // la pagina no se actualiza
            }).catch(err => {
                console.log(err)
            })
    }

    return(
        <tr>
            <th>{producto.name}</th>
            <th>{producto.category}</th>
            <th>{producto.ubication}</th>
            <th>{producto.price}</th>
            <th>
                <Link to={`editarProducto/${producto._id}`}>
                    <FaPencilAlt></FaPencilAlt>
                </Link>
                <FaTrash onClick={() => {borrarProducto(producto._id)}}></FaTrash>
            </th>
        </tr>
    )
}

export default Producto