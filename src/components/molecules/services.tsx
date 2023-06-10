import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Service from '../atoms/service'
import ButtonDark from '../atoms/buttondark'
import { Link } from 'react-router-dom'

const Services = (props: any) => {
  return (
    <Container fluid className='services'>
      <div className='heading-orange mb-40px'>SERVICES I OFFER</div>
      <Row>
        {props.services.map((service:any, index:number) => <Col key={index}><Service data={service} count={index + 1} /></Col>)}
      </Row>
      <div className='d-flex justify-content-center'>
        <Link to="/contact"><ButtonDark width="212px" text="START A PROJECT" /></Link>
      </div>
    </Container>
  )
}

export default Services