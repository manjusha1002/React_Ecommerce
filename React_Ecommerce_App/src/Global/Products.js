import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductContext';
import Header from '../components/Header';
import { CartContext } from './CartContext';

const Products = () => {
    const { products } = useContext(ProductContext);
    const {dispatch} = useContext(CartContext);

    return (
        <>
            <Header />
            <div className='container' >
                <div className='products'>
                    {products.map((product) => (
                        <div className='product' key={product.id}>
                            <div className='product-image'>
                                <img src={product.image} alt='not found' />

                            </div>
                            <div className='product-details'>
                                <div className='product-name'>
                                    {product.name}
                                </div>
                                <div className='product-price'>
                                    ${product.price}.00
                                </div>
                            </div>

                            <div className='add-to-cart' onClick={ () => dispatch({type:'Add_to_cart', id:product.id , product})}>Add</div>
                            {product.status === 'hot' ? <div className='hot'>Hot</div> : ''}
                            {product.status === 'new' ? <div className='new'>New</div> : ''}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products;