import React from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const ButtonDark = (props : {text: string}) => {
  return (
    <Button variant="dark" className='button-dark d-flex'>
      <span className='button-content'>{props.text}</span>
      <span><BsArrowRight className='arrow-icon' /></span>
    </Button>
  )
}

export default ButtonDark