import React, { useEffect, useState } from 'react'
import { Carousel, Modal } from 'react-bootstrap';
import ButtonRound from './buttonround';

interface WorkInterface {
    name: string
}

const WorkCarousel = (props: any) => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (props.show == true) {
            setShow(props.show);
        }
    }, [props.show])

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const handleShowModal = () => {
        props.handleShow(false);
        setShow(false);
    }

    const { name, desc, buttons, images } = props.data;

    return (
        <Modal show={show} className='work-carousel' fullscreen={true} centered onHide={() => handleShowModal()}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className='d-flex'>
                        <h3>{name}</h3>
                        <div className='pill-orange'>Case study coming soon</div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex justify-content-between mb-3'>
                    <p className='color-gray text-small'>{desc}</p>
                    <div>
                        {buttons.map((button: any) => <span className='me-3'><ButtonRound button={button} /></span>)}
                    </div>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {images.map((image:string) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <div className='d-flex img-sm mt-4'>
                    {images.map((image: string, i: number) => <div className='img-container'><img onClick={() => setIndex(i)} className={index == i ? 'img-active' : 'img-not-active'} src={image}/></div>)}
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default WorkCarousel