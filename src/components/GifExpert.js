import React, { useState } from 'react'
import { CategoryAdd } from './CategoryAdd';
import { GifGrid } from './GifGrid';

export const GifExpert = () => {

    //const categories = ['Dragon Ball', 'No Natsu No Taizai', 'Saint Seiya'];
    const [categories, setCategories] = useState(['Dragon Ball', 'No Natsu No Taizai', 'Saint Seiya']);

    // const handleAdd = () => {
    //     //setCategories(...categories, 'Mazinger Z');

    //     setCategories(cFn => [...cFn, 'Mazinger Z']);
    // };

    return(
        <>
            <h1>GifExpert App</h1>
            <CategoryAdd setCategories= { setCategories } />
            <hr />
            {/* <button onClick={handleAdd}>Add</button> */}
            <ol>
                {
                    // categories.map(category => {
                    //     return <li key={category}>{category}</li>
                    // })
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
            
        </>
    )
}