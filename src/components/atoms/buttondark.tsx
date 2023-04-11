import React from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const ButtonDark = (props : {text: string}) => {
  return (
    <Button variant="dark" className='button-dark'>{props.text}<BsArrowRight className='arrow-icon' /></Button>
  )
}

export default ButtonDark