import React /*, { useEffect, useState }*/ from 'react';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid=({category})=>{
    // const [images,setImages]=useState([]);
    const { data:images,loading}=useFetchGifs(category); 
    console.log(loading);
    console.log(images);
    // useEffect(()=>{
    //     getGifs(category)
    //     .then(imgs=>setImages(imgs));
    // },[category])
    
    //getGifs();
    return(
        <>
        <h3>{category}</h3>
       { loading && <p>Loading</p> }
        <div className='card-grid'>
                { images.map(img=>(
                   <GifGridItem
                   key={img.id}
                   //para pasar todo al siguiente componente
                   {...img}
                   />
                    
                ))
            }
        </div>
        </>
    )
}