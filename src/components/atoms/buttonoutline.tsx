import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ButtonOutline = (props : {text: string, outline: string}) => {
  const outline = props.outline || "outline-light"
  return (
    <Button variant={outline} className='button-outline d-flex'>
      <span className='button-content'>{props.text}</span>
      <span><BsArrowRight className='arrow-icon' /></span>
    </Button>
  )
}

export default ButtonOutline