import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div style={{ height: '250px' }} className='mt-5 w-full bg-violet-500 text-white p-4'>
                <h1>footer</h1>
                <div className='flex justify-between p-4'>
                    <div style={{ width: '450px' }} className='intro'>
                        <h5 className='text-2xl font-bold'> <i className='fa-solid fa-truck-fast me-2'></i>E cart</h5>
                        <p>Designed and built with all the love in the world by the team with the help of our contributers.</p>
                        <p>Code licensed Luminar docs CC By 3.0.</p>
                        <p>Currently v5.3.2.</p>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='text-xl font-bold'>Links</h5>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} >Landing </Link>
                        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} >Home </Link>
                        <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }} >Histroy </Link>
                    </div>


                    <div className='flex flex-col'>
                        <h5 className='text-xl font-bold'>Guides</h5>
                        <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'  >React</a>
                        <a href="https://getbootstrap.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank' >React Bootstrap</a>
                        <a href="https://vite.dev/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'  >Vite</a>

                    </div>

                    <div className='flex flex-col'>
                        <h5 className='text-xl font-bold ms-3'>Contacts Us</h5>
                        <div className='flex '>
                            <input type="text" placeholder='Enter your email here' className='rounded p-1 m-2 w-50 ' />
                            <button className='btn btn-info'><i className="fa-solid fa-arrow-right ms-2"></i></button>
                        </div>
                        <div className='icons flex justify-between m-3'>
                            <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="https://x.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://in.linkedin.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-github"></i></a>
                        </div>

                    </div>



                </div>
                <p className='text-center mt-3 bg-light'>Copyright &copy;,media player .Build with React</p>
            </div>
        </>
    )
}

export default Footer