import React from 'react'
import { Link } from 'react-router-dom'

const Rooms = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-xl-8'>
                    <div className='card border-0 my-3'>
                        <div className='row align-items-center'>
                            <div className='col-xl-6'>
                                <img src="/img/cards/room/1.jpg" alt="Room" className='img-fluid rounded-3' />
                            </div>
                            <div className='col-xl-6'>
                                <div className='h2'>Room View Sea</div>
                                <div className='my-3'>
                                    <span className='h4 text-blue'>200 <small>TMT</small></span>
                                    <span style={{ color: '#afb4bf' }}> / Gün</span>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-6 d-flex flex-column mb-4 mt-4 h6'>
                                        <span className='' style={{ color: '#afb4bf' }}>Size:</span>
                                        <span>20 m<sup>2</sup></span>
                                    </div>
                                    <div className='col-xl-6 d-flex flex-column mb-4 mt-4 h6'>
                                        <span className='' style={{ color: '#afb4bf' }}>Capacity:</span>
                                        <span>Max person 4</span>
                                    </div>
                                    <div className='col-xl-6 d-flex flex-column mb-4 h6'>
                                        <span className='' style={{ color: '#afb4bf' }}>Bed:</span>
                                        <span>King beds</span>
                                    </div>
                                    <div className='col-xl-6 d-flex flex-column mb-4 h6'>
                                        <span className='' style={{ color: '#afb4bf' }}>Services:</span>
                                        <span>Wifi, television ...</span>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <Link to="/" className='text-blue text-decoration-none' style={{ fontWeight: "500" }}>View Detail &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4'>

                </div>
            </div>
        </div>
    )
}

export default Rooms