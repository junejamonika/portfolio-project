import Navbar from '../widgets/navbar'
import { Routes, Route } from "react-router-dom"
import Home from '../views/home'
import About from '../views/about'
import Work from '../views/work'
import Contact from '../views/contact'
import Footer from '../widgets/footer'
// import Chat from '../components/molecules/chat'
import ScrollToTop from '../components/atoms/scroll-to-top'

const App = () => {
    return (
        <>
            {/* <Chat/> */}
            <ScrollToTop>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </>
    )
}

export default App