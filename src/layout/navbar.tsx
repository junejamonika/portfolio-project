import { Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import { BiMenuAltRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Appbar() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = (path: string) => {
        navigate(path);
        handleClose();
    }
    return (
        <Navbar expand={false} fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} height={60} />
                </Navbar.Brand>
                <BiMenuAltRight size={30} onClick={handleShow} className="menu-icon" />
                <Offcanvas show={show} onHide={handleClose} placement="bottom">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <img src={Logo} height={60} />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='main-nav'>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link onClick={() => handleClick('')}>Home<div className='float-end'><BsArrowRight className='arrow-icon' /></div></Nav.Link>
                                <Nav.Link onClick={() => handleClick('work')}>Work<div className='float-end'><BsArrowRight className='arrow-icon' /></div></Nav.Link>
                                <Nav.Link onClick={() => handleClick('about')}>About<div className='float-end'><BsArrowRight className='arrow-icon' /></div></Nav.Link>
                                <Nav.Link onClick={() => handleClick('contact')}>Contact<div className='float-end'><BsArrowRight className='arrow-icon' /></div></Nav.Link>
                            </Nav>
                            <div className='position-absolute bottom-0 nav-bottom'>
                                <div>&copy; All rights reserved</div>
                                <div>(+91) 90048-55805  |  smeetmak@gmail.com</div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Appbar;