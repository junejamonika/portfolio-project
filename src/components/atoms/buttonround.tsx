import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonRound = (props: any) => {
    const { button } = props
    return (
        <Button variant="outline-secondary" className='button-round'>{button.name}</Button>
    )
}

export default ButtonRound