import React from 'react'

const Tool = (props:any) => {
    const {data} = props;
  return (
    <div className='tool-section text-light'>
        <img src={data.image}/>
        <div>{data.name}</div>
    </div>
  )
}

export default Tool