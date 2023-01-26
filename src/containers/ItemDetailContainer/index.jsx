import React, { useState } from 'react'
import { useEffect } from 'react';
import './styles.scss'
import productosJson from '../../data/products.json';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});

    //Capturo el ID por el que quiero filtrar
    const { detailId } = useParams();

    useEffect(() => {

        const obtenerProducto = new Promise((acc, rec) => {
            setTimeout(() => {
                acc(productosJson);
            }, 3000);
        });

        obtenerProducto
            .then( productos => {
                //filtramos en base a ID
                if (detailId) {
                    const detalleProducto = productos.find(producto => producto.id.toString() === detailId);
                    setDetail(detalleProducto);
                } 
            })
            .catch((err) => {
                alert(err.message);
            });

    }, [detailId])

    return (
        <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer