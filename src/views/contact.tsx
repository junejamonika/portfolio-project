import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import ContactImg from '../assets/images/contact-img.png'
import ContactImgTwo from '../assets/images/contact-img-two.png'
import FAQ from '../components/molecules/faq';
import ButtonDark from '../components/atoms/buttondark';
import {AiOutlineExclamationCircle} from 'react-icons/ai';

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({name: false, email: false});
  const checks = ['Website Design', 'Brand Design', 'UX/UI Design', 'Design System', 'UX Evaluation', 'Other (Please specify in message)'];

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

  const handleSubmit = () => {
    var errors = { name: false, email: false };
    var is_error = 0;
    if (email == '') {
      errors.email = true;
      is_error = 1;
    }
    if (name == '') {
      errors.name = true;
      is_error = 1;
    }
    if(!is_error) {
      setIsSubmit(true);
    }
    setErrors(errors);
  }


  return (
    <>
      <Container fluid className='p-0'>
        {!isSubmit ? (
          <Row className='contact d-flex'>
            <Col md={6} className='contact-form'>
              <h4>Got ideas? Let’s partner up.</h4>
              <div className='text-gray'>Reach me anytime at <span className='color-orange'>smeetmak@gmail.com</span> or <span className='color-orange'>+91 9004855805</span></div>
              <Form className='mt-4'>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name*</Form.Label>
                      <Form.Control className='text-field' type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                      <Form.Control.Feedback type="invalid" className={errors.name ? 'd-block' : ''}>
                        <AiOutlineExclamationCircle/> Please fill in the required field.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control className='text-field' type="email" placeholder="xyz@company.com" onChange={(e) => setEmail(e.target.value)} />
                      <Form.Control.Feedback type="invalid" className={errors.name ? 'd-block' : ''}>
                      <AiOutlineExclamationCircle/> Please fill in the required field.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='mt-24'>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>How can I help?</Form.Label>
                      <Form.Control className='text-field' type="text" placeholder="Tell me about your project…" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Label className='mt-24 mb-3'>I’m interested in…</Form.Label>
                <Row>
                  {checks.map((field) => (
                    <Col md={6} key={`default-${field}`} className="mb-3">
                      <Form.Check
                        inline
                        type="checkbox"
                        id={`default-${field}`}
                        label={field}
                      />
                    </Col>
                  ))}
                </Row>
                <Button onClick={() => handleSubmit()} variant="dark" className='button-outline mt-30'>LET'S GET STARTED</Button>
              </Form>
            </Col>
            <Col md={6} className="p-0"><img src={ContactImg} /></Col>
          </Row>) : (
          <Row className='contact d-flex'>
            <Col md={7} className="contact-submit">
              <h3>Thank You for your time! I’ve received your message.</h3>
              <p className='text-gray'>I’m excited to learn more about your project. I will personally respond and acknowledge your request via email within 24 hours.</p>
              <p className='text-gray'>In the meantime, you can check out the following:</p>
              <ul className='color-orange mb-5'>
                <li>Frequently Asked Questions</li>
                <li>My Work</li>
                <li>About Me</li>
              </ul>
              <ButtonDark text="BACK TO HOME" />
            </Col>
            <Col><img src={ContactImgTwo} /></Col>
          </Row>
        )}
      </Container>
      <FAQ data={faqs} />
    </>
  )
}

export default Contact