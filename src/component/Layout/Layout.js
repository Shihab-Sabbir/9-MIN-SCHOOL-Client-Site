import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../UserContext/UserContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import bg from '../Home/home_bg.jpg';
function Layout() {
    const [search, setSearch] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [backGroung, setbackGroung] = useState(bg)
    const [totalStay, setTotalStay] = useState(0);
    return (
        <div>
            <Header setSearch={setSearch} toggle={{ isMenuOpen, setIsMenuOpen }} />
            <Outlet context={{ search, setSearch, isMenuOpen, totalStay, setTotalStay, backGroung, setbackGroung }} />
            <Footer />
        </div>
    )
}

export default Layout;

