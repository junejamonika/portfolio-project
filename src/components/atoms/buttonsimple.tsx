import { Button } from 'react-bootstrap'

const ButtonSimple = (props : any) => {
  const outline = props.outline || "outline-dark"

  return (
    <Button style={{width:props.width}} variant={outline} className='button-simple d-flex justify-content-center' onClick={props.handleClick}>
      <span className='button-content'>{props.text}</span>
    </Button>
  )
}

export default ButtonSimple