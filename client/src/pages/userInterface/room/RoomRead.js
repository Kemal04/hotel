import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const RoomRead = () => {

    const option = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        paginations: true,
        autoplay: true,
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-8'>
                        <Splide options={option} hasTrack={false} className="my-5">
                            <SplideTrack className='row'>
                                <SplideSlide className='col-xl-12'>
                                    <img src="/img/cards/room/1.jpg" alt="" className='img-fluid w-100' style={{ height: "500px", objectFit:"cover" }} />
                                </SplideSlide>
                                <SplideSlide className='col-xl-12'>
                                    <img src="/img/cards/room/2.jpg" alt="" className='img-fluid w-100' style={{ height: "500px", objectFit:"cover" }} />
                                </SplideSlide>
                                <SplideSlide className='col-xl-12'>
                                    <img src="/img/cards/room/3.jpg" alt="" className='img-fluid w-100' style={{ height: "500px", objectFit:"cover" }} />
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                    </div>
                    <div className='col-xl-8'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomRead