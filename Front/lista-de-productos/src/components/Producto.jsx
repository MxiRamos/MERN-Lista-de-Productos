function Producto({ producto }){ // obtiene producto de ListaProductos 
    return(
        <tr>
            <th>{producto.name}</th>
            <th>{producto.category}</th>
            <th>{producto.ubication}</th>
            <th>{producto.price}</th>
        </tr>
    )
}

export default Producto