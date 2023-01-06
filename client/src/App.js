import React from 'react'
//ROUTER
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

//COMPONENTS
import { Navbar, Footer, MenuList, MenuSidebar } from "./components"

//USERINTERFACE
import { Home } from "./pages/menu"

//ADMINPANEL
import { AdminHome, AdminHalls, AdminMenu } from './pages/admin';

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
                    </Route>

                    <Route path="/" element={<AdminWithNavbar />}>
                        <Route path='/admin' element={<AdminHome />}></Route>
                        <Route path='/admin/zallar' element={<AdminHalls />}></Route>
                        <Route path='/admin/menyu' element={<AdminMenu />}></Route>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}


const MenuWithNavbar = () => {
    return (
        <div className='row g-0'>
            <MenuList />

            <Outlet />

            <MenuSidebar />
        </div>
    );
}

function AdminWithNavbar() {
    return (
        <Outlet />
    );
}

export default App