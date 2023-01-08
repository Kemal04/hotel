import React from 'react'
//ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

//COMPONENTS
import { Navbar, Footer, BannerSlider } from "./components"

//USERINTERFACE
import { About, Contact, Home, Rooms, RoomRead } from "./pages/userInterface"


//Admin Pages
import { Admin, AdminContacts, AdminContactCreate, AdminContactEdit, AdminContactRead, AdminRoomCreate, AdminRoomEdit, AdminRooms } from './pages/admin';

//TOAST
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <Router>
                <ToastContainer />
                <Routes>

                    <Route path="/" element={<MenuWithNavbar />}>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/biz-barada' element={<About />}></Route>
                        <Route path='/habarlasmak' element={<Contact />}></Route>

                        <Route path='/otaglar' element={<Rooms />}></Route>
                        <Route path='/otag/:id' element={<RoomRead />}></Route>
                    </Route>


                    <Route path="/" element={<AdminWithNavbar />}>
                        <Route path='/admin' element={<Admin />}></Route>

                        <Route path='/admin/teswirler' element={<AdminContacts />}></Route>
                        <Route path='/admin/teswir-gos' element={<AdminContactCreate />}></Route>
                        <Route path='/admin/teswir-uytget/:id' element={<AdminContactEdit />}></Route>
                        <Route path='/admin/teswir/:id' element={<AdminContactRead />}></Route>

                        <Route path='/admin/otaglar' element={<AdminRooms />}></Route>
                        <Route path='/admin/otag-gos' element={<AdminRoomCreate />}></Route>
                        <Route path='/admin/otag-uytget/:id' element={<AdminRoomEdit />}></Route>
                    </Route>

                </Routes>
            </Router>
        </>
    )
}


const MenuWithNavbar = () => {
    return (
        <>
            <Navbar />
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