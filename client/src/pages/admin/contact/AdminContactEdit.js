import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminContactEdit = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const contactId = location.pathname.split("/")[3];

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        comment: "",
    })

    const handleChange = (e) => {
        setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/contact/edit/${contactId}`).then((res) => {
            setContact(res.data.contact)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [contactId])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!contact.name) {
            toast.error("Adynyzy yazyn")
        }
        else if (!contact.email) {
            toast.error("E-mail ýazyň")
        }
        else if (!contact.subject) {
            toast.error("Temasyny ýazyň")
        }
        else if (!contact.comment) {
            toast.error("Habary ýazyň")
        }
        else {
            await axios.post(`http://localhost:3001/api/contact/edit/${contactId}`, contact)
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/teswirler")
                }).catch((error) => {
                    toast.error(error.message)
                });
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='my-5 py-5'>
                            <div className='d-flex justify-content-center aling-items-center h2 mb-5'>
                                Otag üýgetmek
                            </div>
                            <form className='row'>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">Ady</label>
                                    <input name='name' value={contact.name} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label className="form-label fw-bold">E-mail adresi</label>
                                    <input name='email' value={contact.email} onChange={handleChange} type="email" className="form-control rounded-0" autoComplete="off" />
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Temasy</label>
                                    <input name='subject' value={contact.subject} onChange={handleChange} type="text" className="form-control rounded-0" aria-describedby="basic-addon1" autoComplete="off" />
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Habary</label>
                                    <textarea name='comment' value={contact.comment} onChange={handleChange} type="text" className="form-control rounded-0" rows="4"></textarea>
                                </div>

                                <div className='d-grid mt-3'>
                                    <button onClick={handleClick} type="submit" className="btn btn-primary">Üýgetmek</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminContactEdit