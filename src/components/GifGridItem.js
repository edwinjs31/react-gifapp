import React from 'react'
//import PropTypes from 'prop-types'

//COMPONENTE PARA AGREGAR IMAGENES CON SU TITULO
//==============================================================

//const GifGridItem = (img)  //obtiene el mismo resultado
const GifGridItem = ({id,title,url}) => {
    //console.log(img);
    //console.log(id,title,url);
  return (
    <div className='card animate__animated animate__bounce'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {}

export default GifGridItem