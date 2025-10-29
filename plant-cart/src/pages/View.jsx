import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

const View = () => {
  const { id } = useParams();
  const { allproducts } = useSelector(state => state.ProductReducer);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("allproducts")) {
      const allproducts = JSON.parse(sessionStorage.getItem("allproducts"));
      setProduct(allproducts.find(item => item.id == id));
    }
  }, [id]);

  const dispatch = useDispatch();
  const userwishlist = useSelector(state => state.WishlistReducer);
  const userCart = useSelector(state => state.cartReducer);

  const handleWishlist = () => {
    const existingProduct = userwishlist?.find(item => item?.id == id);
    if (existingProduct) {
      alert('Product already in your wishlist');
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleCart = () => {
    dispatch(addToCart(product));
    const existingProduct = userCart?.find(item => item?.id == id);
    if (existingProduct) {
      alert('Product quantity is incrementing');
    } else {
      alert('Product added to cart');
    }
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <div className='flex flex-col mx-5'>
          <div className='grid grid-cols-2 items-center h-screen'>
            <div>
              <img height={'400px'} width={'400px'} src={product?.default_image?.original_url} alt="plant" />
              <div className='flex justify-evenly items-end mt-4'>
                <button onClick={handleWishlist} className='bg-blue-600 text-white p-3 rounded-xl'>Add to wishlist</button>
                <button onClick={handleCart} className='bg-green-800 text-white p-3 rounded-xl'>Add to Cart</button>
              </div>
            </div>
            <div>
              <h3 className='font-bold'>Plant ID: {product.id}</h3>
              <h1 className='text-5xl font-bold'>{product.common_name}</h1>
              <p className='text-lg italic text-gray-600'>{product.scientific_name?.[0]}</p>
              <h4 className='mt-2'>Family: {product.family}</h4>
              <h4>Genus: {product.genus}</h4>
              <h4>Species: {product.species_epithet}</h4>
              <h4>Cultivar: {product.cultivar || "N/A"}</h4>
              <div className='mt-4'>
                <p><span className='font-bold'>Other Names:</span> {product.other_name?.join(', ') || "None listed"}</p>
              </div>
              <h3 className='font-bold my-5 text-xl'>Client Reviews</h3>
              <div>No reviews available for plant species.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;