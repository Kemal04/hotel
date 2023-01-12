import React, { useEffect, useState } from 'react'
//ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

//COMPONENTS
import { Navbar, Footer, BannerSlider } from "./components"

//USERINTERFACE
import { About, Contact, Home, Rooms, RoomRead, Register, Login } from "./pages/userInterface"

//Admin Pages
import { Admin, AdminContacts, AdminContactCreate, AdminContactEdit, AdminContactRead, AdminRoomCreate, AdminRoomEdit, AdminRooms, AdminUsers } from './pages/admin';

//TOAST
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//COntext
import ThemeContextProvider from "./context/ThemeContext"
import axios from 'axios';

const App = () => {

    const [authState, setAuthState] = useState({
        email: "",
        id: 0,
        status: false,
    });

    useEffect(() => {
        axios.get("http://localhost:3001/api/auth/auth", {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            if (response.data.error) {
                setAuthState({ ...authState, status: false });
            } else {
                setAuthState({
                    email: response.data.email,
                    id: response.data.id,
                    status: true,
                });
            }
        });
    }, [authState]);

    return (
        <>
            <ThemeContextProvider>

                <Router>
                    <ToastContainer />
                    <Routes>

                        <Route path="/" element={<WithNavbar authState={authState} />}>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/biz-barada' element={<About />}></Route>
                            <Route path='/habarlasmak' element={<Contact />}></Route>

                            <Route path='/otaglar' element={<Rooms />}></Route>
                            <Route path='/otag/:id' element={<RoomRead />}></Route>

                            <Route path='/hasaba-durmak' element={<Register />}></Route>
                            <Route path='/giris-etmek' element={<Login />}></Route>
                        </Route>


                        <Route path="/" element={<AdminWithNavbar />}>
                            <Route path='/admin' element={<Admin />}></Route>

                            <Route path='/admin/teswirler' element={<AdminContacts />}></Route>
                            <Route path='/admin/teswir-gos' element={<AdminContactCreate />}></Route>
                            <Route path='/admin/teswir-uytget/:id' element={<AdminContactEdit />}></Route>
                            <Route path='/admin/teswir/:id' element={<AdminContactRead />}></Route>

                            <Route path='/admin/otaglar' element={<AdminRooms />}></Route>
                            <Route path='/admin/otag-gosmak' element={<AdminRoomCreate />}></Route>
                            <Route path='/admin/otag-uytget/:id' element={<AdminRoomEdit />}></Route>

                            <Route path='/admin/ulanyjylar' element={<AdminUsers />}></Route>
                        </Route>

                    </Routes>
                </Router>

            </ThemeContextProvider>
        </>
    )
}


const WithNavbar = ({ authState }) => {
    return (
        <>
            <Navbar authState={authState} />
            <BannerSlider />

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

export default App