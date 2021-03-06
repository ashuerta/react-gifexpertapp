import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories(c => [inputValue, ...c]);
            setInputValue('');
        }
        //console.log('Submit Done!');
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {/* <h1>{inputValue}</h1> */}
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}/>
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
