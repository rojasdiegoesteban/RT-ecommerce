import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
            <div className="card text-center" style={{ width: '18rem' }}>
                <img src={product.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.marca}</h5>
                    <p className="card-text">{product.modelo}</p>
                    <Link to={`/detail/${product.id}`} className="btn btn-primary">Go detail</Link>
                </div>
            </div>
    )
}

export default Item