import React, { useState } from 'react';
import { createContext } from 'react';
import campusShoes from '../assets/campus shoes.jpg';
import blackWhiteShoes from '../assets/black-white shoes.jpg';
import adidas from '../assets/adidas superstar.jpg';
import pinkCrocs from '../assets/pink crocs.jpg';
import blackHeadphone from '../assets/black headphone.jpg';
import partyHeadphone from '../assets/party headphone.jpg';
import dslrFlexible from '../assets/dslr flexible.jpg';
import bestDslr from '../assets/best dslr.jpg';
import iphone14ProMax from '../assets/iphone 14 pro max.jpg';
import iphoneXR from '../assets/iphone xr.jpg';
import blackHeel from '../assets/black high heel.jpg';
import redHeel from '../assets/red heel.jpg';
import pointedHeel from '../assets/pointed heel.jpg';
import lightGoldenHeel from '../assets/light-golden heel.jpg';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [products] = useState([
        { id: 1, name: 'Campus Shoes', price: 200, image: campusShoes, status: 'hot' },
        { id: 2, name: 'Black White', price: 150, image: blackWhiteShoes, status: 'new' },
        { id: 3, name: 'Adidas', price: 100, image: adidas, status: 'hot' },
        { id: 4, name: 'Pink Crocs', price: 350, image: pinkCrocs, status: 'new' },
        { id: 5, name: 'BlackHeadphone', price: 180, image: blackHeadphone, status: 'new' },
        { id: 6, name: 'PartyHeadphone', price: 200, image: partyHeadphone, status: 'hot' },
        { id: 7, name: 'DslrFlexible', price: 470, image: dslrFlexible, status: 'new' },
        { id: 8, name: 'BestDslr', price: 550, image: bestDslr, status: 'hot' },
        { id: 9, name: 'iphone 14 pro max', price: 1000, image: iphone14ProMax, status: 'New' },
        { id: 10, name: 'iphone XR', price: 780, image: iphoneXR, status: 'New' },
        { id: 11, name: 'Black Heel', price: 300, image: blackHeel, status: 'hot' },
        { id: 12, name: 'Red Heel', price: 250, image: redHeel, status: 'hot' },
        { id: 13, name: 'Heel', price: 280, image: pointedHeel, status: 'hot' },
        { id: 14, name: 'Golden Heel', price: 350, image: lightGoldenHeel, status: 'hot' }

    ])


    return (
        <ProductContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;

