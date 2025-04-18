import React from 'react'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import ButtonDark from '../components/atoms/buttondark'
import ButtonOutline from '../components/atoms/buttonoutline'
import Logo from '../assets/images/logo.png';
import {ReactComponent as Mail} from '../assets/images/icon-mail.svg';
import {ReactComponent as Linkdein} from '../assets/images/logo-linkedin.svg';
import {ReactComponent as Phone} from '../assets/images/icon-phone-square-alt.svg';
import {ReactComponent as Fiverr} from '../assets/images/icon-fiverr.svg';
import {ReactComponent as Upwork} from '../assets/images/icon-upwork.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='footer text-center'>
            <div className='text-small'>Got a project or partnership in mind?</div>
            <h5 className='mb-5'><span className='color-orange'>Let’s collaborate</span> and bring creative solutions to life.</h5>
            <div className='buttons d-flex justify-content-center'>
                <Link to="/contact"><ButtonDark width="212px" text='START A PROJECT' /></Link>
                <span className='me-4'></span>
                <a href="mailto:smeetmak@gmail.com"><ButtonOutline width="135px" text="MAIL ME" outline="outline-dark" /></a>
            </div>
            <Row className='ms-2 me-2 mt-4 mb-4'>
                <Col md={4}>
                    <Link to="home"><img className='float-start' src={Logo} height={60} /></Link>
                </Col>
                <Col md={4} className="d-flex justify-content-center m-auto footer-nav">
                    <Link to="work">WORK</Link>
                    <Link to="about">ABOUT</Link>
                    <Link to="contact">CONTACT</Link>
                </Col>
                <Col md={4} className="d-flex justify-content-end m-auto nav-icons">
                    <a href="mailto:smeetmak@gmail.com" target="_blank"><Mail /></a>
                    <a href="tel:+91-90048-55805" target="_blank"><Phone /></a> 
                    <a href="https://www.linkedin.com/in/smeet-makwana-488336173" target="_blank"><Linkdein /></a>
                    <a href="https://www.fiverr.com/smeetmakwana" target="_blank" className="fiverr-icon"><Fiverr /></a>
                    <a href="https://www.upwork.com/freelancers/~01da540389d9b90aff" target="_blank"><Upwork /></a>
                </Col>
            </Row>
            <hr/>
            <div className='d-flex justify-content-between color-gray fs-small mb-3'>
                <p>&copy;&nbsp; All rights reserved.</p>
                <p>Designed in Adobe Xd.</p>
            </div>
        </Container>
    )
}

export default Footer