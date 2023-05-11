import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function CrearProducto(){

    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [precio, setPrecio] = useState('')

    function nuevoProducto(){
        var producto = {
            name: nombre,
            category: categoria,
            ubication: ubicacion,
            price: precio
        }
        console.log(producto)

        //axios
        axios.post('/api/productos', producto)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {console.log(err)})

    }

    return(
        <div className="row mt-5 div1">
        <div className="col-lg-8 offset-lg-2">
            <div className="card" >
                <div className="card-body">
                    <form >
                        <h1>Crear Producto</h1>

                        Producto: <input type="text" placeholder="Producto" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
                        <br/>
                        
                        Categoria: <input type="text" placeholder="Categoria" className="form-control" value={categoria} onChange={(e) => {setCategoria(e.target.value)}} />
                        <br/>
                        
                        Ubicacion: <input type="text" placeholder="Ubicacion" className="form-control" value={ubicacion} onChange={(e) => {setUbicacion(e.target.value)}}/>
                        <br/>
                        
                        Precio: <input type="number" placeholder="Precio" className="form-control" value={precio} onChange={(e) => {setPrecio(e.target.value)}}/>
                        <br/>
                        
                        
                        <button className="btn btn-primary" onClick={nuevoProducto}>Ingresar Producto</button>
                        

                        <Link to='/'>
                            <button className="btn btn-primary float-end">Volver a Inicio</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}


export default CrearProducto