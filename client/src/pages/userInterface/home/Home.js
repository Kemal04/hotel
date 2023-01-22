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
                                <label htmlFor="exampleFormControlInput1" className="form-label">Giriş wagty</label>
                                <input type="date" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className='col-xl-3'>
                                <label htmlFor="exampleFormControlInput1" className="form-label">Çykyş wagty</label>
                                <input type="date" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className='col-xl-3'>
                                <div className='row align-items-center'>
                                    <div className='col-xl-4'>
                                        <label className="form-label">Otag</label>
                                        <select className="form-select rounded-0">
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                    <div className='col-xl-4'>
                                        <label className="form-label">Adam</label>
                                        <select className="form-select rounded-0">
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                    <div className='col-xl-4'>
                                        <label className="form-label">Çaga</label>
                                        <select className="form-select rounded-0">
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 mt-4 d-grid'>
                                <Link to="/otaglar" className='btn btn-primary small'>Gözle</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Seacrh Section  */}

                {/* About Section  */}
                <div className='container my-5 py-5'>
                    <div className='row align-items-center'>
                        <div className='col-xl-6'>
                            <div className='h6 ls-2 mb-3' style={{ color: "#1cc3b2" }}> BIz barada </div>
                            <div className='display-4 mb-5'> “Roberto" myhmanhanasyna hoş geldiňiz </div>
                            <div className='h5 lh-lg ls-1 text-secondary mb-5'>
                                Dünýäde 340-dan gowrak myhmanhana bar, NH Hotel Group, barjak ýeriňize garamazdan ajaýyp ýaşamak üçin dürli myhmanhanalary hödürleýär.                            </div>
                            <div> Alyp Baryjy: <span style={{ color: "#1cc3b2" }}> Kemal Hojayew</span> </div>
                            <img src="/img/icons/signature.png" alt="Signature" className='img-fluid mt-5' />
                        </div>
                        <div className='col-xl-6'>
                            <div className='row g-4 align-items-center'>
                                <div className='col-xl-6'>
                                    <div className='scale'>
                                        <img src="/img/cards/about/1.jpg" alt="cards" className='img-fluid rounded-3 mb-4' />
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
                                <h5>Ulag</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/coal.png" alt="coal" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Rahatlyk</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/fork.png" alt="fork" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Restoran</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/drink.png" alt="drink" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Içgiler</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/rol.png" alt="Rol" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Ulag</h5>
                            </div>
                        </div>
                        <div className='col-xl-2'>
                            <div className='card border-0 shadow p-4 d-flex flex-column align-items-center text-primary-hover'>
                                <img src="/img/icons/coal.png" alt="coal" className='img-fluid mb-3' style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                                <h5>Spa Dynç Alyş</h5>
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
                                                            <span style={{ width: "120px", display: "inline-block" }}>Adam sany</span>
                                                            <span style={{ width: "auto", display: "inline-block" }}>: Iň köp {room.capacity} adam</span>
                                                        </li>
                                                        <li className='li mb-3'>
                                                            <span style={{ width: "120px", display: "inline-block" }}>Görnüşi</span>
                                                            <span style={{ width: "auto", display: "inline-block" }}>: {room.roomType.name}</span>
                                                        </li>
                                                        <li className='li mb-3'>
                                                            <span style={{ width: "120px", display: "inline-block" }}>Hyzmatlar</span>
                                                            <span style={{ width: "auto", display: "inline-block" }}>: Wifi, Telewizor, Hammam . . .</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='ms-5 mt-4'>
                                                    <Link to="/" className='btn btn-primary ls-1 btn-lg' style={{ fontWeight: "600" }}>Maglumatlary gör</Link>
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
                            <div className='h6 ls-2 mb-3' style={{ color: "#1cc3b2" }}> Habarlaşmak </div>
                            <div className='display-5 mb-4'>Bize Gelen Teswirler</div>
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