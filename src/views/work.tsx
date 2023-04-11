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
    <div className='work-section'>
      <Row className='work-title'>
        <Col md={4}><h1 className='text-white'>Work</h1></Col>
        <Col md={8} className="text-gray">During the last half-decade, I have been privileged to work with many enterprises of varying sizes, from growing startups to multinationals, across 10+ industries. Here’s a glimpse into some of my work.</Col>
      </Row>
      {works.map(data => <Work data={data} />)}
    </div>
  )
}

export default Works