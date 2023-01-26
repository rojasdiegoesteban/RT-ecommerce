import React from 'react'
import Item from '../Item'
import './styles.scss'

const ItemList = ({productos}) => {
    return (
        <div className="item-list">
            {productos.map(producto => {
               return <Item product={producto} key={producto.id}/>
            })}
        </div>
    )
}

export default ItemList