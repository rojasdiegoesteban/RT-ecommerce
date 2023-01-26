import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">CrAzySTorE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/marcas/Adidas"className="dropdown-item">Adidas</Link>
                                </li>
                                <li>
                                    <Link to="/marcas/Nike"className="dropdown-item">Nike</Link>
                                </li>
                                <li>
                                    <Link to="/marcas/Jordan"className="dropdown-item">Jordan</Link>
                                </li>
                                <li>
                                    <Link to="/marcas/Vans"className="dropdown-item">Vans</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Zapatillas
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/zapatillas/Hombre" className="dropdown-item">Hombre</Link>
                                </li>
                                
                                <li>
                                    <Link to="/zapatillas/Mujer" className="dropdown-item">Mujer</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Accesorios</a>
                        </li>
                    </ul>
                    <div>
                    <CartWidget/>
                    <span>0</span>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar