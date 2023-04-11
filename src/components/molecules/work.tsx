import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs';
import ButtonOutline from '../atoms/buttonoutline';
import ButtonRound from '../atoms/buttonround';
import WorkCarousel from '../atoms/work-carousel';

const Work = (props: any) => {
    const { data } = props;
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='pt-5 pb-5 work'>
                <Row>
                    <Col className='text-white' md={4}>
                        <h5>{data.name}</h5>
                        <h5 className='fw-light'>{data.type}</h5>
                    </Col>
                    <Col md={4}>
                        <ul className='text-gray'>
                            {data.list.map((entry: string, index: number) => <li key={index}>{entry}</li>)}
                        </ul>
                    </Col>
                    <Col md={4}>
                        <div className='float-end'>
                            {data.buttons.map((button: any) => <span className='me-3'><ButtonRound button={button} /></span>)}
                        </div>
                    </Col>
                </Row>
                <div className='mt-4 img-container'>
                    <img className='image-large' src={data.image} />
                    <div className="middle">
                        <div className="view-project" onClick={() => setShowModal(true)}>VIEW PROJECT<BsArrowRight className='arrow-icon ms-1' /></div>
                    </div>
                </div>
                <WorkCarousel data={data} show={showModal} handleShow={setShowModal}/>
            </div>
        </>
    )
}

export default Work