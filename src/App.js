import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Banner from './components/Banner';
import ProductContextProvider from './Global/ProductContext';
import Products from './Global/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart';
import NotFound from './components/NotFound';
import CartContextProvider from './Global/CartContext';
import WishList from './components/Wishlist';

function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            {/* <Header /> */}
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/wishlist' element={<WishList />} />
            </Routes>

          </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
    </div>

  );
}

export default App;
