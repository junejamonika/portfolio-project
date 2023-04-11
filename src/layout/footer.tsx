import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ButtonDark from '../components/atoms/buttondark'
import ButtonOutline from '../components/atoms/buttonoutline'
import Logo from '../assets/images/logo.png';
import Mail from '../assets/images/icon-mail.svg';
import Linkdein from '../assets/images/logo-linkedin.svg';
import Phone from '../assets/images/icon-phone-square-alt.svg';
import Fiverr from '../assets/images/icon-fiverr.svg';

const Footer = () => {
    return (
        <Container fluid className='footer text-center'>
            <div className='text-small'>Got a project or partnership in mind?</div>
            <h5 className='mb-5'><span className='color-orange'>Let’s collaborate</span> and bring creative solutions to life.</h5>
            <ButtonDark text='START A PROJECT' />
            <span className='me-4'></span>
            <ButtonOutline text="MAIL ME" outline="outline-dark" />
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} height={60} />
                    </Navbar.Brand>
                    <Navbar>
                        <Nav className="me-auto footer-nav">
                            <Nav.Link href="#home">WORK</Nav.Link>
                            <Nav.Link href="#link">ABOUT</Nav.Link>
                            <Nav.Link href="#link">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar>
                    <Navbar>
                        <Nav className="me-auto nav-icons">
                            <img src={Mail} height={30} />
                            <img src={Phone} height={30} />
                            <img src={Linkdein} height={30} />
                            <img src={Fiverr} height={30} />
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
            <hr/>
            <div className='d-flex justify-content-between text-gray'>
                <p>All rights reserved.</p>
                <p>Designed in Adobe Xd.</p>
            </div>
        </Container>
    )
}

export default Footer