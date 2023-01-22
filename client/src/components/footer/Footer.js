import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

const Footer = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div className={darkMode ? 'bg-dark p-5 text-white border-top' : 'bg-primary-blue p-5 text-white'}>
                <div className="container">
                    <div className="footer-text">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-4">
                                <div className="ft-about">
                                    <div className="mb-2">
                                        <Link to="/" className=' text-decoration-none'>
                                            <div className="h3">Logo</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="ft-newslatter">
                                    <h6 className='mb-4'>Salgylar</h6>
                                    <p>Baş Sahypa</p>
                                    <p>Biz Barada</p>
                                    <p>Galereýa</p>
                                    <p>Habarlaşmak</p>
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="ft-contact">
                                    <h6>Habarlaşmak</h6>
                                    <ul className='p-0 mt-4'>
                                        <li className='mb-3'> 499401, 499402, 499403</li>
                                        <li className='mb-3'>it@sanly.tm</li>
                                        <li className='mb-3'>Aşgabat ş., Oguzhan köç., 13 "A"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top text-center mt-3 pt-3">
                    © 2023 Ähli hukuklary goralan
                </div>
            </div>
        </>
    )
}

export default Footer