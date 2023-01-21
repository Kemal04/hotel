import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import BannerImg from "../../../components/banner/BannerImg"
import { ThemeContext } from '../../../context/ThemeContext'

const Register = () => {

    const { darkMode } = useContext(ThemeContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();

        if (!name) {
            toast.error("Adyňyzy ýazyň!")
        }
        else if (!email) {
            toast.error("E-mail adresiňizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (!cPassword) {
            toast.error("Açar sözüňizi gaýtadan ýazyň!")
        }
        else if (cPassword !== password) {
            toast.error("Açar sözüňiz gabat gelenok !")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post("http://localhost:3001/api/auth/register", {
                name: name,
                email: email,
                password: password,
            }).then((res) => {
                navigate("/")
                toast.success(res.data)
            }).catch((res) => {
                toast.error(res.data.error)
            })
        }
    }

    return (
        <div className={darkMode ? 'bg-dark text-white' : 'bg-white'}>
            <BannerImg name="Agza Bolmak" />
            <div className='container py-5'>
                <div className='row align-items-center justify-content-around'>

                    <div className='col-lg-4'>
                        <form onSubmit={registerUser} className={`card p-4 shadow border-0 ${darkMode ? 'bg-dark text-white' : 'bg-white'}`}>

                            <div className="mb-5 h2 text-center">
                                Agza Bolmak
                            </div>

                            <div className="mb-4">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Adyňyz" />
                            </div>

                            <div className="mb-4">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="E-mail adresi" />
                            </div>

                            <div className="mb-4">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Açar sözi" />
                            </div>

                            <div className="mb-4">
                                <input value={cPassword} onChange={(e) => setCPassword(e.target.value)} type="password" className="form-control" placeholder="Açar sözini gaytalaň" />
                            </div>

                            <div className="d-grid mb-4 mt-3">
                                <button type="submit" className="btn btn-primary">Agza Bol</button>
                            </div>

                            <div className='text-center mb-1 d-flex align-items-center justify-content-center'>
                                Meniň öň hem agza boldym ?<Link to="/giris-etmek" className='nav-link ms-2'>Giriş etmek</Link>
                            </div>

                        </form>
                    </div>
                    <div className='col-lg-6'>
                        <img alt='' src="/img/cards/auth/1.svg" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register