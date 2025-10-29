import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import loadingimages from '../assets/loadingimage.gif';

const Home = () => {
  const dispatch = useDispatch();
  const { allproducts, loading, errorMsg } = useSelector(state => state.ProductReducer);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  const totalpage = Math.ceil(allproducts?.length / productPerPage);
  const currentPageProductLastIndex = productPerPage * currentPage;
  const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage;
  const visibleALlProducts = allproducts.slice(currentPageProductFirstIndex, currentPageProductLastIndex);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const navigatToNextPage = () => {
    if (currentPage != totalpage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigatToPrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
        {loading ? (
          <div className='flex justify-center items-center my-5 text-lg'>
            <img width={'700px'} height={'700px'} src={loadingimages} alt="loading" />
            loading..............
          </div>
        ) : (
          <>
            <div className='grid grid-cols-4 gap-4 m-20'>
              {allproducts?.length > 0 ? (
                visibleALlProducts.map(product => (
                  <div key={product?.id} className='rounded border p-3 shadow'>
                    <img height={'200px'} width={'100%'} src={product.default_image?.thumbnail} alt="plant" />
                    <div className='text-center'>
                      <h3 className='text-xl font-bold'>{product.common_name}</h3>
                      <p className='text-sm italic text-gray-500'>{product.scientific_name?.[0]}</p>
                      <Link className='bg-violet-500 rounded p-1 mt-2 text-white inline-block' to={`/${product?.id}/view`}>
                        View More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className='flex justify-center items-center font-bold text-red-400 text-3xl'>
                  Product not found!!!!
                </div>
              )}
            </div>

            <div className='text-2xl text-center font-bold'>
              <span onClick={navigatToPrevPage} className='cursor-pointer'>
                <i className='fa-solid fa-backward me-5'></i>
              </span>
              <span>{currentPage} of {totalpage}</span>
              <span onClick={navigatToNextPage} className='cursor-pointer'>
                <i className='fa-solid fa-forward me-5'></i>
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;