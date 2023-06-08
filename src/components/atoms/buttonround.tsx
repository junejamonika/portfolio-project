import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonRound = (props: any) => {
    const { name } = props
    return (
        <Button variant="outline-secondary" className='button-round'>{name}</Button>
    )
}

export default ButtonRound