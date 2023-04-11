import Navbar from './navbar'
import { Routes, Route } from "react-router-dom"
import Home from '../views/home'
import About from '../views/about'
import Work from '../views/work'
import Contact from '../views/contact'
import Footer from './footer'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/work' element={<Work />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Layout