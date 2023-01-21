import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Profile = () => {

    let { id } = useParams();
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/${id}`).then((res) => {
            setUser(res.data.user);
        });
    }, [id]);

    return (
        <>
            <div className='banner-fixed d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        {/* <div className='col-lg-12 text-center text-white h2'>
                            {user.name}
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ marginTop: "-50px" }}>
                <div className='row justify-content-center'>
                    <div className='w-75'>
                        <div className='card border-0 shadow px-5'>
                            <div className='d-flex justify-content-center'>
                                <img src="/img/icons/user-1.jpg" alt="" className='rounded-circle' style={{ width: "150px", marginTop: "-70px" }} />
                            </div>
                            <div className='mt-4 h2 text-center'>
                                {user.name}
                            </div>
                            <div className='mt-1 small text-center'>
                                {user.email}
                            </div>
                            <div className='row justify-content-center mt-4 mb-5'>
                                <div className='w-50'>
                                    <div className="card-body">
                                        <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Doly Adym</h6>
                                            </div>
                                            <div className="col-sm-8 text-secondary">
                                                {user.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Familýam</h6>
                                            </div>
                                            <div className="col-sm-8 text-secondary">
                                                . . .
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">E-mail adresim</h6>
                                            </div>
                                            <div className="col-sm-8 text-secondary">
                                                {user.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Telefon belgim</h6>
                                            </div>
                                            <div className="col-sm-8 text-secondary">
                                                +993 . . .
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Adresim</h6>
                                            </div>
                                            <div className="col-sm-8 text-secondary">
                                                . . .
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-12 d-grid">
                                                <Link to="" className="btn btn-primary">Maglumatlary düzeltmek</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile