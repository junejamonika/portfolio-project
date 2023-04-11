import React from 'react'

const Tool = (props:any) => {
    const {data} = props;
  return (
    <div className='tool-section text-light'>
        <img src={data.image}/>
        <div>{data.title}</div>
    </div>
  )
}

export default Tool