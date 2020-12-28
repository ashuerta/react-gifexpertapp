import React from 'react'
//import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    //const [count, setCount] = useState(0);   
    /*
    const [images, setimages] = useState([]);
    useEffect(() => {
        getGifs(category)
            .then(imgs => setimages(imgs))
    }, [category])
    */
    
    //data:images use alias : like as in sql 
    const {data: images, loading} = useFetchGifs(category);
    
    /*
    useEffect(() => {
        getGifs();    
    }, [])

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=7gkXawNcwT8k7l7fJPd7M4pwv6h69my1&limit=10`;
        const res = await fetch(url);
        const {data} = await res.json();
        //console.log(data);
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        //console.log(gifs);
        setimages(gifs);
     }

    //getGifs();
    */
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {/* { loading ? 'Loading...' : 'Loaded' } */}
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="card-grid">
                {
                    images.map(img => ( 
                        <GifGridItem 
                            key={img.id}
                            {...img} 
                        />
                    ))
                }

                {/* <ol>
                    {
                        images.map(({id, title}) => (
                            <li key={id}>{title}</li>
                        ))
                    }
                </ol> */}
                {/* <h3>{count}</h3>
                <button onClick={() => setCount(count+1)}></button> */}

                {/* {
                    images.map(img => ( 
                        <GifGridItem 
                            key={img.id}
                            {...img} 
                        />
                    ))
                } */}
            </div>
        </>
    )
}
