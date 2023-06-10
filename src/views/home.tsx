import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Services from '../components/molecules/services'
import Work from '../components/molecules/work'
import ButtonOutline from '../components/atoms/buttonoutline'
import DesignProcess from '../components/molecules/designprocess'
import Faq from '../components/molecules/faq'
import HomeBanner from '../components/molecules/homebanner'
import { Link } from 'react-router-dom'
import { guestGateway } from '../utils/gateway'
import URLS from '../configs/urls'

const Home = () => {
  const [workList, setWorkList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    getWorkList();
    getServiceList();
  }, []);

  const getWorkList = async () => {
    const response = await guestGateway(
      "GET",
      URLS.WORK.GET_WORK + `?limit=3`
    );
    if (response.success) {
      setWorkList(response.data);
    }
  };

  const getServiceList = async () => {
    const response = await guestGateway("GET", URLS.SERVICE.GET_SERVICES);
    if (response.success) {
      setServiceList(response.data);
    }
  };
  return (
    <>
      <HomeBanner/>
      <Services services={serviceList} />
      <div className='work-section'>
        <Row className='work-title'>
          <Col md={5}><h1 className='text-white'>Work</h1></Col>
          <Col md={7} className="text-gray">During the last half-decade, I have been privileged to work with many enterprises of varying sizes, from <span className='color-white'>growing startups to multinationals</span>, across <span className='color-white'>10+ industries</span>. Here’s a glimpse into some of my work.</Col>
        </Row>
        <div>
          {workList.map(data => <Work data={data}/>)}
        </div>
        <div className="d-flex justify-content-center mt-60">
          <Link to="/work"><ButtonOutline width="164px" text="VIEW MORE" outline="outline-light" /></Link>
        </div>
      </div>
      <DesignProcess />
      <Faq/>
    </>
  )
}

export default Home