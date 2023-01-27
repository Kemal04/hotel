import React, { useEffect, useState } from 'react'
import axios from 'axios';

//ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

//COMPONENTS
import { Navbar, Footer, ProfileNavbar } from "./components"

//USERINTERFACE
import { About, Contact, Home, Rooms, RoomRead, Register, Login } from "./pages/userInterface"

//ADMIN
import { Admin, AdminContacts, AdminContactEdit, AdminRoomCreate, AdminRoomEdit, AdminRooms, AdminUsers, AdminRoomTypes, AdminRoomTypeCreate, AdminRoomTypeEdit, AdminBooking, AdminBookingEdit } from './pages/admin';

//ERROR
import { Forbiden, NotFounded } from './pages/error';

//PROFILE
import { Profile, ProfileBooking, ProfileEdit, ProfileHistory } from './pages/profile';

//TOAST
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//CONTEXT
import ThemeContextProvider from "./context/ThemeContext"
import { AuthContext } from './context/AuthContext';

const App = () => {

    const [authState, setAuthState] = useState({
        email: "",
        id: 0,
        status: false,
        role: "User",
    });

    useEffect(() => {
        axios.get("http://localhost:3001/api/auth/auth", {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            if (response.data.error) {
                setAuthState({ ...authState, status: false, role: "User" });
            } else {
                setAuthState({
                    email: response.data.email,
                    id: response.data.id,
                    status: true,
                    role: response.data.role,
                });
            }
        });
    }, []);

    return (
        <>
            <AuthContext.Provider value={{ authState, setAuthState }}>
                <ThemeContextProvider>
                    <Router>
                        <ToastContainer />
                        <Routes>

                            <Route path="/" element={<WithNavbar />}>
                                <Route path='/' element={<Home />}></Route>
                                <Route path='/biz-barada' element={<About />}></Route>
                                <Route path='/habarlasmak' element={<Contact />}></Route>

                                <Route path='/otaglar' element={<Rooms />}></Route>
                                <Route path='/otag/:id' element={<RoomRead />}></Route>

                                {
                                    !authState.status && (
                                        <>
                                            <Route path='/hasaba-durmak' element={<Register />}></Route>
                                            <Route path='/giris-etmek' element={<Login />}></Route>
                                        </>
                                    )

                                }
                            </Route>

                            <Route path="/" element={<AdminWithNavbar />}>
                                {
                                    authState.role === "Admin" && (
                                        <>

                                            <Route path='/admin' element={<Admin />}></Route>

                                            <Route path='/admin/ulanyjylar' element={<AdminUsers />}></Route>

                                            <Route path='/admin/teswirler' element={<AdminContacts />}></Route>
                                            <Route path='/admin/teswir-uytget/:id' element={<AdminContactEdit />}></Route>

                                            <Route path='/admin/otaglar' element={<AdminRooms />}></Route>
                                            <Route path='/admin/otag-gosmak' element={<AdminRoomCreate />}></Route>
                                            <Route path='/admin/otag-uytget/:id' element={<AdminRoomEdit />}></Route>

                                            <Route path='/admin/otag-gornusleri' element={<AdminRoomTypes />}></Route>
                                            <Route path='/admin/otag-gornusini-gosmak' element={<AdminRoomTypeCreate />}></Route>
                                            <Route path='/admin/otag-gornusini-uytget/:id' element={<AdminRoomTypeEdit />}></Route>

                                            <Route path='/admin/bronlanan-otaglar' element={<AdminBooking />}></Route>
                                            <Route path='/admin/bronlanan-otaglary-uytget/:id' element={<AdminBookingEdit />}></Route>
                                        </>
                                    )
                                }
                            </Route>

                            <Route path="/" element={<ProfilWithNavbar />}>
                                {
                                    authState.status && (
                                        <>
                                            <Route path='/ulanyjy-profili/:id' element={<Profile />}></Route >
                                            <Route path='/ulanyjy-profili-uytget/:id' element={<ProfileEdit />}></Route >
                                            <Route path='/ulanyjy-profili/bronlarym/:id' element={<ProfileBooking />}></Route>
                                            <Route path='/ulanyjy-profili/onki-bronlarym/:id' element={<ProfileHistory />}></Route>
                                        </>
                                    )
                                }
                            </Route>

                            <Route path='/*' element={<NotFounded />}></Route>
                            <Route path='/404' element={<NotFounded />}></Route>
                            <Route path='/403' element={<Forbiden />}></Route>

                        </Routes>
                    </Router>
                </ThemeContextProvider>
            </AuthContext.Provider>
        </>
    )
}


const WithNavbar = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
}

const AdminWithNavbar = () => {
    return (
        <Outlet />
    );
}

const ProfilWithNavbar = () => {
    return (
        <>
            <ProfileNavbar />
            <Outlet />
        </>
    );
}

export default App