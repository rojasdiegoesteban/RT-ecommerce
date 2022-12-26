import React from 'react'
import CartWidget from '../CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">CrAzySTorE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Adidas</a></li>
                                <li><a className="dropdown-item" href="/#">Nike</a></li>
                                <li><a className="dropdown-item" href="/#">Jordan</a></li>
                                <li><a className="dropdown-item" href="/#">Vans</a></li>
                                <li><a className="dropdown-item" href="/#">Supreme</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Zapatillas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Hombre</a></li>
                                <li><a className="dropdown-item" href="/#">Mujer</a></li>
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