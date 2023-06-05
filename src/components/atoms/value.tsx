import React from 'react'

const Value = (props: any) => {
  const {data} = props;
  return (
    <div className='value text-light'>
        <img src={data.image}/>
        <div className='mb-1 mt-1'>{data.heading}</div>
        <div className='fs-small opacity-60'>{data.subheading}</div>
    </div>
  )
}

export default Value