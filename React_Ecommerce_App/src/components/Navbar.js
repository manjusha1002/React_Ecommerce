import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const {qty} = useContext(CartContext);
    return (
        <div>

            <nav >
                <ul className='left'>
                    <li><Link to="/">Flipkart</Link></li>
                </ul>
                <ul className='search'>
                    <li><input className='form-control' type='search' placeholder='Search' /></li>
                </ul>

                <ul className='right' >
                    <li><Link to='/cart'><span className='shoppingCart'><i className="fa-solid fa-cart-plus fa-xl"></i><span className='cartCount'>{qty}</span></span></Link></li>
                    <li><Link to='/wishlist'><span className='wishCart'><i className="fa-regular fa-heart fa-xl"></i></span></Link></li>
                </ul>
                {/* <div className="btn-group btn-group-sm" role="group" aria-label="First group" id='login-buttons'>
                    <button type="button" class="btn btn-success"> Login </button>
                    <button type="button" class="btn btn-success"> SignUp </button>
                </div> */}

            </nav>
        </div>
    );
};


export default Navbar;