import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ButtonOutline = (props : any) => {
  const [arrowShow, setArrowShow] = useState(false);
  const outline = props.outline || "outline-light"

  return (
    <Button onMouseEnter={() => setArrowShow(true)} onMouseLeave={() => setArrowShow(false)} style={{width:props.width}} variant={outline} className='button-outline d-flex justify-content-center' onClick={props.handleClick}>
      <span className='button-content'>{props.text}</span>
      {arrowShow ? <span><BsArrowRight className='arrow-icon' /></span> : ""}
    </Button>
  )
}

export default ButtonOutline