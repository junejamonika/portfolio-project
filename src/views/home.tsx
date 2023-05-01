import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Services from '../components/molecules/services'
import Work from '../components/molecules/work'
import ProjectOne from '../assets/images/projects/project1/1.png'
import ProjectOneTwo from '../assets/images/projects/project1/2.png'
import ProjectOneThree from '../assets/images/projects/project1/3.png'
import ProjectOneFour from '../assets/images/projects/project1/4.png'
import ProjectFive from '../assets/images/projects/project1/5.png'
import ProjectTwo from '../assets/images/projects/project2/1.png'
import ProjectThree from '../assets/images/projects/project3/1.png'
import ButtonOutline from '../components/atoms/buttonoutline'
import DesignProcess from '../components/molecules/designprocess'
import Faq from '../components/molecules/faq'
import HomeBanner from '../components/molecules/homebanner'
import { Link } from 'react-router-dom'

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
    images : [
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
    images : [
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
    images : [
      ProjectOne,
      ProjectOneTwo,
      ProjectOneThree,
      ProjectOneFour,
      ProjectFive
    ]
  }
]

const faqs = [
  {
    question: "Do we need a face to face meeting before we begin the project?",
    answer: "Each business and website is unique, and my prices depend on your specific needs and requirements, such as number of pages, features, timeline and other factors. You will receive a transparent, no-obligation price from me based on the project’s scope so you’ll know precisely what you’re paying for. My custom websites typically start at $500, as a general estimate."
  },
  {
    question: "What is the timeline of different design projects?",
    answer: "Each business and website is unique, and my prices depend on your specific needs and requirements, such as number of pages, features, timeline and other factors. You will receive a transparent, no-obligation price from me based on the project’s scope so you’ll know precisely what you’re paying for. My custom websites typically start at $500, as a general estimate."
  },
  {
    question: "How much does the Website Design project cost?",
    answer: "Each business and website is unique, and my prices depend on your specific needs and requirements, such as number of pages, features, timeline and other factors. You will receive a transparent, no-obligation price from me based on the project’s scope so you’ll know precisely what you’re paying for. My custom websites typically start at $500, as a general estimate."
  },
  {
    question: "What details do I need to provide for the project?",
    answer: "Each business and website is unique, and my prices depend on your specific needs and requirements, such as number of pages, features, timeline and other factors. You will receive a transparent, no-obligation price from me based on the project’s scope so you’ll know precisely what you’re paying for. My custom websites typically start at $500, as a general estimate."
  },
  {
    question: "What kind of businesses and industries do you work with?",
    answer: "Each business and website is unique, and my prices depend on your specific needs and requirements, such as number of pages, features, timeline and other factors. You will receive a transparent, no-obligation price from me based on the project’s scope so you’ll know precisely what you’re paying for. My custom websites typically start at $500, as a general estimate."
  },
  {
    question: "Do I receive a fully functional website or application?",
    answer: "Each business and website is unique, and my prices depend on your specific needs and requirements, such as number of pages, features, timeline and other factors. You will receive a transparent, no-obligation price from me based on the project’s scope so you’ll know precisely what you’re paying for. My custom websites typically start at $500, as a general estimate."
  }
]

const Home = () => {
  return (
    <>
      <HomeBanner/>
      <Services />
      <div className='work-section'>
        <Row className='work-title'>
          <Col md={5}><h1 className='text-white'>Work</h1></Col>
          <Col md={7} className="text-gray">During the last half-decade, I have been privileged to work with many enterprises of varying sizes, from <span className='color-white'>growing startups to multinationals</span>, across <span className='color-white'>10+ industries</span>. Here’s a glimpse into some of my work.</Col>
        </Row>
        {works.map(data => <Work data={data}/>)}
        <div className="d-flex justify-content-center mt-60">
          <Link to="/work"><ButtonOutline text="VIEW MORE" outline="outline-light" /></Link>
        </div>
      </div>
      <DesignProcess />
      <Faq data={faqs} />
    </>
  )
}

export default Home