import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import PropTypes from 'prop-types'

//COMPONENTE PARA CREAR EL GRID PARA LAS IMAGENES Y SE COMUNICA CON 'GifGridItem'

const GifGrid = ({ category }) => {

    const {data,loading}=useFetchGifs(category);
    return (
        <>
            <h2>{category}</h2>
            {loading && 'loading...'}
             <div className="card-grid">
                {
                    //mandamos la 'img' al componente 'GifGridItem'
                    data.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                    // images.map(img => (<GifGridItem key={img.id} img={ img } />))
                }
            </div> 
        </>
    );
};

GifGrid.propTypes = {};

export default GifGrid;
