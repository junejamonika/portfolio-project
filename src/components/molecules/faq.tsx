import React, { useEffect, useState } from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { authGateway } from '../../utils/gateway';
import URLS from '../../configs/urls';

const FAQ = (props: any) => {
  const [faqList, setFaqList] = useState([]);
  useEffect(() => {
    getFaqList();
  }, []);

  const getFaqList = async () => {
    const response = await authGateway("GET", URLS.FAQ.GET_FAQS);
    if (response.success) {
      setFaqList(response.data);
    }
  };
  return (
    <Container fluid className='faq-section' id="faq">
      <div className='m-auto faq'>
        <h2 className='text-white faq-heading'>Frequently Asked Questions</h2>
        <Accordion flush>
          {faqList.map((faq: any, index: number) => {
            return (
              <Accordion.Item eventKey={"key-" + index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body className='text-gray' dangerouslySetInnerHTML={{__html:faq.answer}}></Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
        <p className='text-gray mt-40'>Didn’t find the answer you need? If you have any additional questions feel free to shoot me a message at:<br/><a href="mailto:smeetmak@gmail.com"><span className='color-orange'>smeetmak@gmail.com</span></a></p>
      </div>
    </Container>
  )
}

export default FAQ