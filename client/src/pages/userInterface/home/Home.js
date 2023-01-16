import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { ThemeContext } from '../../../context/ThemeContext';
import BannerSlider from "../../../components/banner/BannerSlider"
import { useAPI } from '../../../context/FetchContext';

const Home = () => {

    const { darkMode } = useContext(ThemeContext)

    const { rooms, contacts } = useAPI()

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        autoplay: true,
    };

    const contactOptions = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        paginations: true,
        autoplay: true,
        arrows: false,
    };
    

    return (
        <>
            <BannerSlider />
            <div className={darkMode ? 'bg-dark text-white' : 'bg-white'}>
                {/* Seacrh Section  */}
                <div className='container' style={{ marginTop: "-80px" }}>
                    <div className={darkMode ? "card border-0 shadow p-5 bg-dark text-white" : "card border-0 shadow p-5 bg-white"}>
                        <div className='row align-items-center'>
                            <div className='col-xl-3'>
                                <label htmlFor="exampleFormControlInput1" className="form-label">Check In</label>
                                <input type="date" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className='col-xl-3'>
                                <label htmlFor="exampleFormControlInput1" className="form-label">Check Out</label>
                                <input type="date" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className='col-xl-3'>
                                <div className='row align-items-center'>
                                    <div className='col-xl-4'>
                                        <label className="form-label">Room</label>
                                        <select className="form-select rounded-0">
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                    <div className='col-xl-4'>
                                        <label className="form-label">Adult</label>
                                        <select className="form-select rounded-0">
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                    <div className='col-xl-4'>
                                        <label className="form-label">Children</label>
                                        <select className="form-select rounded-0">
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 mt-4 d-grid'>
                                <button className='btn btn-primary small'>Gözle</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Seacrh Section  */}

                {/* About Section  */}
                <div className='container my-5 py-5'>
                    <div className='row align-items-center'>
                        <div className='col-xl-6'>
                            <div className='h6 ls-2 mb-3' style={{ color: "#1cc3b2" }}> ABOUT US </div>
                            <div className='display-4 mb-5'> Welcome To Roberto Hotel Luxury </div>
                            <div className='h5 lh-lg ls-1 text-secondary mb-5'>
                                With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering htmlFor a perfect stay no matter where your destination.
                            </div>
                            <div> Manager: <span style={{ color: "#1cc3b2" }}>Michen Taylor</span> </div>
                            <img src="/img/icons/signature.png" alt="Signature" className='img-fluid mt-5' />
                        </div>
                        <div className='col-xl-6'>
                            <div className='row g-2 align-items-center'>
                                <div className='col-xl-6'>
                                    <div className='scale'>
                                        <img src="/img/cards/about/1.jpg" alt="cards" className='img-fluid rounded-3 mb-2' />
                                    </div>
                                    <div className='scale'>
                                        <img src="/img/cards/about/2.jpg" alt="cards" className='img-fluid rounded-3' />
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className='scale'>
                                        <img src="/img/cards/about/3.jpg" alt="cards" className='img-fluid rounded-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About Section  */}

                {/* Mini Cards Section  */}
                <div className='container my-5 pb-5'>
                    <div className={darkMode ? 'row align-items-center text-dark' : 'row align-items-center text-dark'}>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/rol.png" alt="Rol" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Transportion</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/coal.png" alt="coal" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Reiseservice</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/fork.png" alt="fork" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Spa Relaxtion</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/drink.png" alt="drink" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Restaurant</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/rol.png" alt="Rol" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Bar & Drink</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/coal.png" alt="coal" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Reiseservice</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mini Cards Section  */}

                {/* Rooms Section  */}
                <div className='container-fluid p-0 my-5'>
                    <Splide options={options} hasTrack={false}>
                        <SplideTrack className='row g-0'>
                            {
                                rooms.map((room) => (
                                    <SplideSlide className='col-xl-12 mb-3 p-0' key={room.id}>
                                        <div className={darkMode ? 'row bg-white text-dark' : 'row bg-primary-blue text-white'}>
                                            <div className='col-xl-6'>
                                                <img src="/img/banners/1.jpg" alt="room" className='img-fluid' />
                                            </div>
                                            <div className='col-xl-6 d-flex align-items-start justify-content-center flex-column'>
                                                <div className='ms-5 display-5'>№ {room.roomNum}</div>
                                                <div className='ms-5 my-4'>
                                                    <span className='h2 text-blue'>{room.price} <small>TMT</small></span>
                                                    <span> / Gün</span>
                                                </div>
                                                <div className='ms-3'>
                                                    <ul className='ul'>
                                                        <li className='li mb-3'>
                                                            <span style={{ width: "120px", display: "inline-block" }}>Meýdany</span>
                                                            <span style={{ width: "auto", display: "inline-block" }}>: {room.size} m<sup>2</sup></span>
                                                        </li>
                                                        <li className='li mb-3'>
                                                            <span style={{ width: "120px", display: "inline-block" }}>Adam Sany</span>
                                                            <span style={{ width: "auto", display: "inline-block" }}>: Iň köp adam {room.capacity}</span>
                                                        </li>
                                                        <li className='li mb-3'>
                                                            <span style={{ width: "120px", display: "inline-block" }}>Görnüşi</span>
                                                            <span style={{ width: "auto", display: "inline-block" }}>: "{room.roomType.name}"</span>
                                                        </li>
                                                        <li className='li mb-3'>
                                                            <span style={{ width: "120px", display: "inline-block" }}>Hyzmatlar</span>
                                                            <span style={{ width: "auto", display: "inline-block" }}>: Wifi, Telewizor, Hammam . . .</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='ms-5 mt-4'>
                                                    <Link to="/" className='btn btn-primary ls-1 btn-lg' style={{ fontWeight: "600" }}>View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))
                            }
                        </SplideTrack>
                    </Splide>
                </div>
                {/* Rooms Section  */}

                {/* Contact Section  */}
                <div className='container py-5'>
                    <div className='row justify-content-between '>
                        <div className='col-xl-6 d-flex justify-content-end'>
                            <img src="/img/cards/contact/1.jpg" alt="Person" className='img-fluid rounded-3 w-75' />
                        </div>
                        <div className='col-xl-6'>
                            <div className='h6 ls-2 mb-3' style={{ color: "#1cc3b2" }}> TESTIMONIALS </div>
                            <div className='display-5 mb-4'> Our Guests Love Us</div>
                            <Splide options={contactOptions} hasTrack={false} className="my-5">
                                <SplideTrack className='row g-0'>
                                    {
                                        contacts.map((contact) => (
                                            <SplideSlide className='col-xl-12' key={contact.id}>
                                                <div className='h5 lh-lg ls-1 text-secondary mb-5'>
                                                    {contact.comment}
                                                </div>
                                                <div>
                                                    {contact.name} - <span className='text-blue'>{contact.email}</span>
                                                </div>
                                            </SplideSlide>
                                        ))
                                    }
                                </SplideTrack>
                            </Splide>
                        </div>
                    </div>
                </div>
                {/* Contact Section  */}
            </div>

        </>
    )
}

export default Home