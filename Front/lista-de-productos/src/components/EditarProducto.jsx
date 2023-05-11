import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function EditarProducto(){

    const params = useParams()
    const navegar = useNavigate()

    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [precio, setPrecio] = useState('')

    useEffect(() => {
        axios.get(`/api/productos/${params.id}`) // obtengo el id 
            .then(res => {
                console.log(res.data)
                const dataProducto = res.data
                setNombre(dataProducto.name)
                setCategoria(dataProducto.category)
                setUbicacion(dataProducto.ubication)
                setPrecio(dataProducto.price)
            })
    }, [])

    //Actualiza el producto
    function actualizarProducto(){
        const productoActualizado = {
            name: nombre,
            category: categoria,
            ubication: ubicacion,
            price: precio
        }

        axios.put(`/api/productos/${params.id}`, productoActualizado)
            .then(res => {
                console.log(res.data)
                alert(res.data)
            })
            .catch(err => {console.log(err)})

        navegar(0)
    }

    return(
        <div className="row mt-5 div1">
        <div className="col-lg-8 offset-lg-2">
            <div className="card" >
                <div className="card-body">
                    <form >
                        <h1>Actualizar Producto</h1>

                        Producto: <input type="text" placeholder="Producto" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
                        <br/>
                        
                        Categoria: <input type="text" placeholder="Categoria" className="form-control" value={categoria} onChange={(e) => {setCategoria(e.target.value)}} />
                        <br/>
                        
                        Ubicacion: <input type="text" placeholder="Ubicacion" className="form-control" value={ubicacion} onChange={(e) => {setUbicacion(e.target.value)}}/>
                        <br/>
                        
                        Precio: <input type="number" placeholder="Precio" className="form-control" value={precio} onChange={(e) => {setPrecio(e.target.value)}}/>
                        <br/>
                        
                        
                        <button className="btn btn-primary" onClick={actualizarProducto}>Actualizar Producto</button>
                        

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

export default EditarProducto