import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaProductos from './components/ListaProductos'
import CrearProducto from './components/CrearProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ingresarProducto">Ingresar Producto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaProductos></ListaProductos>}></Route>
          <Route path='/ingresarProducto' element={<CrearProducto></CrearProducto>}></Route>
          <Route path='/editarProducto/:id' element={<EditarProducto></EditarProducto>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
