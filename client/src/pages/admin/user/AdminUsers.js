import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/slices/users';

const AdminUsers = () => {

    const dispatch = useDispatch();

    const { users } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <>
            <div className='container py-5'>
                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                    Ulanyjylar bölümi
                    <Link to="/"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <table className="table">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Ulanyjy ady</th>
                                    <th scope="col">E-mail adresi</th>
                                    <th scope="col">Hukugy</th>
                                    <th scope="col">Açar sözi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((user, index) => (
                                        <tr key={index} className={user.role === "Admin" ? "fw-bold bg-light" : null}>
                                            <td>{index}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>************</td>
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

export default AdminUsers