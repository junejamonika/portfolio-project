import React from 'react'
import Work from '../components/molecules/work'
import ProjectOne from '../assets/images/projects/project1/1.png'
import ProjectOneTwo from '../assets/images/projects/project1/2.png'
import ProjectOneThree from '../assets/images/projects/project1/3.png'
import ProjectOneFour from '../assets/images/projects/project1/4.png'
import ProjectFive from '../assets/images/projects/project1/5.png'
import ProjectTwo from '../assets/images/projects/project2/1.png'
import ProjectThree from '../assets/images/projects/project3/1.png'
import { Col, Row } from 'react-bootstrap'
import ButtonOutline from '../components/atoms/buttonoutline'

const works = [
  {
    name: 'Ripples',
    type: 'Website Design',
    desc: 'E-Commerce Website design for eco-friendly bags',
    list: [
      "Landing Page",
      "Product Categories",
      "Product Listings",
      "Product Details",
      "Shipping Cart",
    ],
    buttons: [
      {
        name: 'Website',
        link: 'test.com'
      },
      {
        name: 'Ecommerce',
        link: 'test.com'
      },
      {
        name: 'Startup',
        link: 'test.com'
      }
    ],
    image: ProjectOne,
    images: [
      ProjectOne,
      ProjectOneTwo,
      ProjectOneThree,
      ProjectOneFour,
      ProjectFive
    ]
  },
  {
    name: 'Ripples',
    type: 'Website Design',
    desc: 'E-Commerce Website design for eco-friendly bags',
    list: [
      "Landing Page",
      "Product Categories",
      "Product Listings",
      "Product Details",
      "Shipping Cart",
    ],
    buttons: [
      {
        name: 'Website',
        link: 'test.com'
      },
      {
        name: 'Ecommerce',
        link: 'test.com'
      },
      {
        name: 'Startup',
        link: 'test.com'
      }
    ],
    image: ProjectTwo,
    images: [
      ProjectOne,
      ProjectOneTwo,
      ProjectOneThree,
      ProjectOneFour,
      ProjectFive
    ]
  },
  {
    name: 'Ripples',
    type: 'Website Design',
    desc: 'E-Commerce Website design for eco-friendly bags',
    list: [
      "Landing Page",
      "Product Categories",
      "Product Listings",
      "Product Details",
      "Shipping Cart",
    ],
    buttons: [
      {
        name: 'Website',
        link: 'test.com'
      },
      {
        name: 'Ecommerce',
        link: 'test.com'
      },
      {
        name: 'Startup',
        link: 'test.com'
      }
    ],
    image: ProjectThree,
    images: [
      ProjectOne,
      ProjectOneTwo,
      ProjectOneThree,
      ProjectOneFour,
      ProjectFive
    ]
  }
]

const Works = () => {
  return (
    <div className='work-section mt-100'>
      <Row className='work-title'>
        <Col md={4}><h1 className='text-white'>Work</h1></Col>
        <Col md={8} className="text-gray align-self-center text-end"><a href="tel:+91-90048-55805">(+91) 90048-55805</a> | <a href="mailto:smeetmak@gmail.com">smeetmak@gmail.com</a></Col>
      </Row>
      {works.map(data => <Work data={data} />)}
      <div className="d-flex justify-content-center mt-60">
        <ButtonOutline text="LOAD MORE" outline="outline-light" />
      </div>
    </div>
  )
}

export default Works