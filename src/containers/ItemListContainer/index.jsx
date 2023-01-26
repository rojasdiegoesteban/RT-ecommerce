import React, { useState } from 'react'
import { useEffect } from 'react';
import './styles.scss'
import productosJson from '../../data/products.json';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    //Capturo la marca por la que quiero filtrar
    const { marcaId } = useParams();
    //Capturo genero por el que quiero filtrar
    const { generoId } = useParams();

    useEffect(() => {

        const obtenerProductos = new Promise((acc, rec) => {
            setTimeout(() => {
                acc(productosJson);
            }, 3000);
        });

        obtenerProductos
            .then((products) => {
                //filtramos en base a marcaId
                if (marcaId) {
                    const productosFiltradosPorMarca = products.filter(producto => producto.marca === marcaId)
                    setProducts(productosFiltradosPorMarca);
                }
                //filtramos en base a generoId
                else if (generoId) {
                    const productosFiltradosPorGenero = products.filter(producto => producto.genero === generoId)
                    setProducts(productosFiltradosPorGenero);
                }
                else {
                    setProducts(products);
                }

            })
            .catch((err) => {
                alert(err.message);
            });

    }, [marcaId, generoId])

    return (
        <ItemList productos={products} />
    )
}

export default ItemListContainer