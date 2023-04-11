import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const FAQ = (props: any) => {
  const { data } = props;
  return (
    <Container fluid className='faq-section'>
      <div className='m-auto faq'>
        <h2 className='text-white faq-heading'>Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="key-0" flush>
          {data.map((faq: any, index: number) => {
            return (
              <Accordion.Item eventKey={"key-" + index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body className='text-gray'>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
        <p className='text-gray mt-40'>Didn’t find the answer you need? If you have any additional questions feel free to shoot me a message at:<br/><span className='color-orange'>smeetmak@gmail.com</span></p>
      </div>
    </Container>
  )
}

export default FAQ