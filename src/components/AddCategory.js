import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ( { setcategories } ) => {
    const [inputValue, setinputValue] = useState('')

    const handledInputChange = ( e ) => {
        setinputValue (e.target.value) ;
    }
    const handledSubmit  = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        if(inputValue.trim().length>2){
            setcategories( cats => [inputValue,...cats ] );
            setinputValue ("") ;
        }else{

        }


    }
    return (
        <form onSubmit={ handledSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange = {handledInputChange }
            />
        </form>

    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
