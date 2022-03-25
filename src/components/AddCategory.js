import React, { useState } from "react";
import PropTypes from 'prop-types'

//COMPONENTE PARA AGREGAR CATEGORIAS DESDE UN INPUT
//===========================================================================

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => setInputValue(e.target.value);

    //al dar ENTER se añade nueva categoria,con sus validaciones
    const handleSubmit = (e) => {
        e.preventDefault();
        //borrados los espacios bacios de los dos lados y que no sea vacio
        if (inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue,...cats]);
            //una vez agregado el primer valor se limpia, para no repetir elementos.
            setInputValue('');
        }


    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Seach  </label>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>
    );

};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}