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
                <div className='d-flex justify-content-between'>
                    <div className='text-white'>
                        <h5>{data.name}</h5>
                        <h5 className='fw-light'>{data.title}</h5>
                    </div>
                    <div>
                        <ul className='text-gray'>
                            {data.accomplishments.map((entry: string, index: number) => <li key={index}>{entry}</li>)}
                        </ul>
                    </div>
                    <div className='align-self-center'>
                        <div className='float-end'>
                            {data.tags.map((tag: any) => <span className='me-3'><ButtonRound name={tag} /></span>)}
                        </div>
                    </div>
                </div>
                <div className='mt-4 img-container'>
                    <img className='image-large' src={data.images[0]} />
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