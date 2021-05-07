import { useState } from "react";
import React from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    // const categories = 
    const [categories, setcategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = { setcategories }/>
            <hr/>
            
            <ol>
                {
                    categories.map( (category,i) => (
                        <GifGrid 
                        key = { category }
                        category = { category }
                        />
                    ))
                }
            </ol>
        </>
    );
}
