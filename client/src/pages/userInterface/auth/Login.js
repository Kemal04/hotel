import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from "../../../context/AuthContext";
import BannerImg from "../../../components/banner/BannerImg"
import { ThemeContext } from '../../../context/ThemeContext';

const Login = () => {

    const { darkMode } = useContext(ThemeContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("E-mail adresiňizi ýazyň!")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post("http://localhost:3001/api/auth/login", {
                email: email,
                password: password,
            }).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    navigate("/")
                    toast.success(res.data.success)
                    setAuthState({
                        email: res.data.email,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                }

            })
        }
    }

    return (
        <div className={darkMode ? 'bg-dark text-white' : 'bg-white'}>
            <BannerImg name="Giriş Etmek" />
            <div className='container py-5'>
                <div className='row align-items-center justify-content-around'>
                    <div className='col-lg-6'>
                        <img alt='' src="/img/cards/auth/1.svg" className="img-fluid" />
                    </div>
                    <div className='col-lg-4'>
                        <form onSubmit={loginUser} className={`card p-4 shadow border-0 ${darkMode ? 'bg-dark text-white' : 'bg-white'}`}>
                            <div className="mb-5 h2 text-center">
                                Login
                            </div>
                            <div className="mb-4">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="E-mail adresi" />
                            </div>
                            <div className="mb-4">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Açar sözi" />
                            </div>
                            <div className="d-grid mb-1">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div className='mb-3 small'>
                                <Link to="/reset" className='nav-link'>Açar sözüni täzele</Link>
                            </div>
                            <div className='text-center mb-1 d-flex align-items-center justify-content-center'>
                                Sen agza bolmadyňmy ? <Link to="/hasaba-durmak" className='nav-link ms-2'> Agza Bol</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login