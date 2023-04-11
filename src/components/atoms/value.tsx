import React from 'react'

const Value = (props: any) => {
  const {data} = props;
  return (
    <div className='value text-light'>
        <img src={data.image}/>
        <div className='mb-1 mt-1'>{data.title}</div>
        <div className='fs-small'>{data.text}</div>
    </div>
  )
}

export default Value