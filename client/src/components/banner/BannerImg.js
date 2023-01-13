import React from 'react'
import "./bannerImg.css"

const BannerImg = ({name}) => {
    return (
        <div className='banner-fixed d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center text-white h2'>
                        {name}
                    </div>
                    <div className='col-lg-12 text-center'>
                        <img src='img/icons/video.svg' alt='' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerImg