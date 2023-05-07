import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const ButtonDark = (props:any) => {
  const [arrowShow, setArrowShow] = useState(false);
  return (
    <Button onMouseEnter={() => setArrowShow(true)} onMouseLeave={() => setArrowShow(false)} style={{width:props.width}} variant="dark" className='button-dark d-flex justify-content-center' onClick={props.handleClick}>
      <span className='button-content'>{props.text}</span>
      {arrowShow ? <span><BsArrowRight className='arrow-icon' /></span> : ''}
    </Button>
  )
}

export default ButtonDark