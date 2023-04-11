import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Service from '../atoms/service'
import Webdesign from '../../assets/images/web-design.png'
import AppDesign from '../../assets/images/app-design.png'
import UxEvaluation from '../../assets/images/ux-evaluation.png'
import BrandDesign from '../../assets/images/brand-design.png'
import ButtonDark from '../atoms/buttondark'

const services = [
  {
    title: "Website\nDesign",
    icon: Webdesign,
    desc: "Don’t get left behind. Join the conversion wave!",
    list: [
      "Boost Revenue & Conversion Rate",
      "Access to a broader audience",
      "Targeted Advertising",
      "Brand Consistency",
      "Improve SEO"
    ]
  },
  {
    title: "Application\nDesign",
    icon: AppDesign,
    desc: "Conquer your customers’ pain points with UX/UI design.",
    list: [
      "Boost Customer Retention Rate",
      "Enhance productivity",
      "Build customer trust",
      "Drive business growth",
      "Increase ROI"
    ]
  },
  {
    title: "UX\nEvaluation",
    icon: UxEvaluation,
    desc: "Unlock better UX with problem identification and effective recommendations.",
    list: [
      "Actionable insights",
      "Identify costly errors",
      "Research-driven decisions",
      "Resolve design inconsistencies",
      "Increase lead flow"
    ]
  },
  {
    title: "Brand\nDesign",
    icon: BrandDesign,
    desc: "It’s time to get noticed!",
    list: [
      "Boost brand confidence & trust",
      "Build recognition",
      "Competitive advantage",
      "Deeper audience connection",
      "Improve customer acquisition"
    ]
  }
]

const Services = () => {
  return (
    <Container fluid className='services'>
      <div className='heading-orange'>SERVICES I OFFER</div>
      <Row>
        {services.map((service, index) => <Col key={index}><Service data={service} count={index+1}/></Col>)}
      </Row>
      <div className='d-flex justify-content-center'>
        <ButtonDark text="START A PROJECT"/>
      </div>
    </Container>
  )
}

export default Services