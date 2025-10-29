import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementByQuantity, emtyCart, incrementByQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
    const navigatto = useNavigate()

    const usercart = useSelector(state => state.cartReducer)

    const [cartTotal, setCartTotal] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        if (usercart?.length > 0) {
            const total = usercart
                .map(item => item.totalPrice)
                .reduce((acc, curr) => acc + curr, 0);
            setCartTotal(total);
        }
    }, [usercart]);

    const handleDecrementbyquantity = (product) => {
        if (product?.quantity > 0) {
            dispatch(decrementByQuantity(product.id))
        }
        else {
            dispatch(removeCartItem(product?.id))

        }

    }

    //checkout
    const handleCheckout = () => {
        dispatch(removeCartItem())
        alert('order is confirmend Thanku for pusrchasing')
        navigatto('/')
    }

    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5'>

                {
                    usercart?.length > 0 ?
                        <>

                            <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
                            <div className='grid grid-cols-3 gap-4 mt-5'>
                                <div className='col-span-2 border rounded p-5 shadow'>
                                    <table className='table-auto w-full '>
                                        <thead>
                                            <tr>
                                                <td className='font-semibold'>#</td>
                                                <td className='font-semibold'>Name</td>
                                                <td className='font-semibold'>Image</td>
                                                <td className='font-semibold'>Quantity</td>
                                                <td className='font-semibold'>Price</td>
                                                <td className='font-semibold'>...</td>
                                            </tr>
                                        </thead>
                                        {

                                            usercart?.map((product, index) => (
                                                <tbody>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{product.title}</td>
                                                        <td>
                                                            <div className="w-[70px] h-[70px] border border-gray-400 rounded overflow-hidden flex items-center justify-center">
                                                                <img
                                                                    src={product?.default_image?.original_url}
                                                                    alt="plant"
                                                                    className="object-cover w-full h-full"
                                                                />
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div className='flex'>
                                                                <button onClick={() => handleDecrementbyquantity(product)} className='font-bold'>-</button>
                                                                <input style={{ width: '40px' }} type="text" className='border p-1 rounded mx-2' value={product?.quantity} readOnly />
                                                                <button onClick={() => dispatch(incrementByQuantity(product?.id))} className='font-bold'>+</button>
                                                            </div>
                                                        </td>
                                                        <td> $ {product?.totalPrice}</td>
                                                        <td> <button onClick={() => dispatch(removeCartItem(product?.id))} className='text-red-500'> <i class="fa-solid fa-trash"></i> </button></td>
                                                    </tr>
                                                </tbody>

                                            ))

                                        }

                                    </table>
                                    <div className='float-right mt-5'>
                                        <button onClick={() => dispatch(emtyCart())} className='bg-red-500 rounded p-2 text-white'>Empty cart</button>
                                        <Link to={'/'} className='bg-blue-500 ms-3 rounded p-3 text-white'> Shop more..</Link>
                                    </div>

                                </div>
                                <div className='col-span-1'>
                                    <div className='border rounded shadow p-5'>
                                        <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-shadow-red-600'>${cartTotal}</span> </h2>
                                        <hr />
                                        <button onClick={handleCheckout} className='bg-green-900 text-white mt-5 w-full text-2xl p-4'>check out </button>

                                    </div>

                                </div>

                            </div>
                        </>
                        :


                        <div className='flex justify-center  items-center h-screen'>
                            <img src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="alternate" />
                            <h1 className='text-2xl text-red-400'>Your Cart is empty </h1>
                        </div>

                }


            </div>
        </>
    )
}

export default Cart