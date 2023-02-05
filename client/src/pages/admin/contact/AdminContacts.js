import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getAllContacts } from '../../../redux/slices/contact'

const AdminContact = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { contacts } = useSelector(state => state.contacts)
    useEffect(() => {
        dispatch(getAllContacts())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteContact(id))
        navigate("/admin/teswirler")
    }

    return (
        <>
            <div className='container py-5'>
                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                    Teswirler bölümi
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <table className="table">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Ady</th>
                                    <th scope="col">Düzetmek</th>
                                    <th scope="col">Temasy</th>
                                    <th scope="col">Mazmuny</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((contact, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.subject}</td>
                                            <td>{contact.comment.substring(0, 40)}...</td>
                                            <td>
                                                <Link className='me-3 btn btn-sm btn-warning' to={`/admin/teswir-uytget/${contact.id}`}>Duzeltmek</Link>
                                                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(contact.id)}>Pozmak</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminContact