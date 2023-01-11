import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const BannerSlider = () => {

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        autoplay: false,
    };

    return (
        <div className='container-fluid p-0'>
            <Splide options={options} hasTrack={false}>
                <SplideTrack className='row g-0'>
                    <SplideSlide className='col-lg-12 p-0'>
                        <img src="/img/banners/1.jpg" alt="banner" className='w-100 position-relative' style={{ height: "85vh", objectFit: "cover", }} />
                        <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "rgba(14, 39, 55, 0.7)", position: "absolute", top: "0", height: "85vh", width: "100%" }}>
                            <div className='text-white ls-1 text-uppercase'>Hotels & Restorant</div>
                            <div className='text-white display-2 mb-5 mt-4'>Otele Hoş Geldiňiz</div>
                            <Link to="/" className='btn btn-outline-primary btn-lg px-5'>Şu Wagt Gözle</Link>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='col-lg-12 p-0'>
                        <img src="/img/banners/2.jpg" alt="banner" className='w-100 position-relative' style={{ height: "85vh", objectFit: "cover", }} />
                        <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "rgba(14, 39, 55, 0.7)", position: "absolute", top: "0", height: "85vh", width: "100%" }}>
                            <div className='text-white ls-1 text-uppercase'>Hotels & Restorant</div>
                            <div className='text-white display-2 mb-5 mt-4'>Otele Hoş Geldiňiz</div>
                            <Link to="/" className='btn btn-outline-primary btn-lg px-5'>Şu Wagt Gözle</Link>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='col-lg-12 p-0'>
                        <img src="/img/banners/3.jpg" alt="banner" className='w-100 position-relative' style={{ height: "85vh", objectFit: "cover", }} />
                        <div className='d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: "rgba(14, 39, 55, 0.7)", position: "absolute", top: "0", height: "85vh", width: "100%" }}>
                            <div className='text-white ls-1 text-uppercase'>Hotels & Restorant</div>
                            <div className='text-white display-2 mb-5 mt-4'>Otele Hoş Geldiňiz</div>
                            <Link to="/" className='btn btn-outline-primary btn-lg px-5'>Şu Wagt Gözle</Link>
                        </div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    )
}

export default BannerSlider