import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext'
import { toast } from 'react-toastify';
import axios from 'axios';
import BannerImg from "../../../components/banner/BannerImg"

const Contact = () => {

    const { darkMode } = useContext(ThemeContext)

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        comment: "",
    })

    const handleChange = (e) => {
        setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()

        if (!contact.name) {
            toast.error("Adyňyzy ýazyň")
        }
        else if (!contact.email) {
            toast.error("E-mail adresiňizi ýazyň")
        }
        else if (!contact.subject) {
            toast.error("Temaňyzy ýazyň")
        }
        else if (!contact.comment) {
            toast.error("Teswiriňizi ýazyň")
        }
        else if (contact.comment.length < 25) {
            toast.error("Teswiriňizi 50 harpdan ybarat bolmaly")
        }
        else {
            await axios.post("http://localhost:3001/api/contact/create", contact)
                .then((res) => {
                    toast.success(res.data.success)
                    console.log(res.data)
                    navigate("/")
                }).catch((error) => {
                    toast.error(error.message)
                });
        }
    }

    return (
        <>
            <div className={darkMode ? 'bg-dark text-white' : 'bg-white'}>
                <BannerImg name="Habarlaşmak" />
                <div className='container mb-5' style={{ marginTop: "-80px" }}>
                    <div className={darkMode ? "card border-0 shadow p-5 bg-dark text-white" : "card border-0 shadow p-5 bg-white"}>
                        <div className='row align-items-center'>
                            <div className='col-xl-3 mb-4 text-center'>
                                <img src="/img/icons/phone.svg" alt="" style={{ width: "20px" }} />
                                <div className='h4 mt-3'>Phone</div>
                                <div className='text-secondary'>+01-234-567-890</div>
                            </div>
                            <div className='col-xl-3 mb-4 text-center'>
                                <img src="/img/icons/loc.svg" alt="" style={{ width: "20px" }} />
                                <div className='h4 mt-3'>Address</div>
                                <div className='text-secondary'>Iris Watson, 283 Fusce Rd,NY</div>
                            </div>
                            <div className='col-xl-3 mb-4 text-center'>
                                <img src="/img/icons/phone.svg" alt="" style={{ width: "20px" }} />
                                <div className='h4 mt-3'>Open time</div>
                                <div className='text-secondary'>10:00 am to 23:00 pm</div>
                            </div>
                            <div className='col-xl-3 mb-4 text-center'>
                                <img src="/img/icons/email.svg" alt="" style={{ width: "20px" }} />
                                <div className='h4 mt-3'>Email</div>
                                <div className='text-secondary'>Info.colorlib @gmail.com</div>
                            </div>
                        </div>

                        <div className='t-3'>
                            <iframe title='0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6360365.127578056!2d55.02286416404438!3d38.88631666238773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f65cb5574bc6ccb%3A0x7edd826b4169a491!2sT%C3%BCrkmenistan!5e0!3m2!1str!2s!4v1637062056772!5m2!1str!2s" style={{ border: "1px", width: "100%", height: "500px" }} allowFullScreen loading="lazy"></iframe>
                        </div>

                    </div>

                    <div className='text-center my-5'>
                        <div className='h6 ls-2 mb-3' style={{ color: "#1cc3b2" }}>CONTACT US</div>
                        <div className='h1'>Leave Message</div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className="col-xl-4 mb-4">
                            <input onChange={handleChange} name='name' type="text" className="form-control rounded-0" placeholder='Adynyz' autoComplete='off' />
                        </div>
                        <div className="col-xl-4 mb-4">
                            <input onChange={handleChange} name='email' type="email" className="form-control rounded-0" placeholder='E-mail adresiniz' autoComplete='off' />
                        </div>
                        <div className="col-xl-8 mb-4">
                            <input onChange={handleChange} name='subject' type="name" className="form-control rounded-0" placeholder='Temasy' autoComplete='off' />
                        </div>
                        <div className="col-xl-8 mb-4">
                            <textarea onChange={handleChange} name='comment' class="form-control rounded-0" rows="6" placeholder='Sizin Habaryňyz'></textarea>
                        </div>
                        <div className="col-xl-5 mb-4 text-center">
                            <button onClick={handleClick} className='btn btn-primary px-5'>Ugrat</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact