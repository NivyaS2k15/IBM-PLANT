import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

const Wishlist = () => {
  const userwishlist = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();
  const userCart = useSelector(state => state.cartReducer);

  const handleCart = (product) => {
    dispatch(removeItem(product?.id));
    dispatch(addToCart(product));
    const existingProduct = userCart?.find(item => item?.id === product?.id);
    if (existingProduct) {
      alert('Product quantity is incrementing');
    } else {
      alert('Product added to cart');
    }
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className='container px-4 mx-auto'>
        {userwishlist?.length > 0 ? (
          <>
            <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
            <div className='grid grid-cols-4 gap-4 mt-2'>
              {userwishlist.map(product => (
                <div key={product?.id} className='rounded border p-3 shadow'>
                  <img height={'200px'} width={'100%'} src={product.default_image?.thumbnail} alt="plant" />
                  <div className='text-center'>
                    <h3 className='text-xl font-bold'>{product?.common_name}</h3>
                    <p className='text-sm italic text-gray-500'>{product?.scientific_name?.[0]}</p>
                    <div className='flex justify-evenly mt-3'>
                      <button onClick={() => dispatch(removeItem(product?.id))} className='text-xl text-red-500 font-bold'>
                        <i className="fa-solid fa-heart-circle-xmark"></i>
                      </button>
                      <button onClick={() => handleCart(product)} className='text-xl text-green-600 font-bold'>
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <img src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="alternate" />
            <h1 className='text-2xl text-red-400'>Your Wishlist is empty</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;