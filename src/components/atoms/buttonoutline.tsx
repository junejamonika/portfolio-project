import React from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const ButtonOutline = (props : {text: string, outline: string}) => {
  const outline = props.outline || "outline-light"
  return (
    <Button variant={outline} className='button-outline'>{props.text}<BsArrowRight className='arrow-icon' /></Button>
  )
}

export default ButtonOutline