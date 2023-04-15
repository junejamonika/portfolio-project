import React from 'react'
import { Container } from 'react-bootstrap'
import HandIcon from '../../assets/images/hand-icon.png'
import BannerImg from '../../assets/images/smeet-photo.png'
import ButtonDark from '../atoms/buttondark'
import ButtonOutline from '../atoms/buttonoutline'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <Container className='home-banner' fluid>
        <img className='banner-img' src={BannerImg}/>
        <p className='fw-600 mb-0 pt-80'><img src={HandIcon} height={36} alt="" className='me-2' />HI THERE, I’M SMEET.</p>
        <div className='banner-heading'>DESIGN</div>
        <div className='d-flex justify-content-between'>
          <p className='text-gray'>Your <span className='color-orange'>UX/UI and Design Consultant</span> partner with a core focus on delivering solutions that not only have a strong aesthetic presence but also generate tangible results for your business.</p>
          <p className='innovate'>Innovate. Evolve.</p>
        </div>
        <div className='home-buttons mt-40'>
          <Link to="/contact"><ButtonDark text="START A PROJECT"/></Link>
          <Link to="/work"><ButtonOutline text="VIEW WORK" outline="outline-dark"/></Link>
        </div>
    </Container>
  )
}

export default HomeBanner