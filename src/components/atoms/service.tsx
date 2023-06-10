import React from 'react'
import { GrStar } from "react-icons/gr";

export interface ServiceProps {
    data: {
        name: string,
        image: string,
        desc: string,
        list: string[],
    };
    count: number
};

const Service: React.FC<ServiceProps> = (props) => {
    const { data, count } = props;
    return (
        <div className='service position-relative'>
            <img src={data.image} alt="" />
            <h5 className='pt-4 pb-1 title'>{data.name}</h5>
            <p className='text-gray'>{data.desc}</p>
            <div className='position-absolute bottom-0 bullet-list'>
                {data.list.map(entry => <div className='list-item'><GrStar size={10} className="color-orange" /> {entry}</div>)}
                <div className='service-count'>0{count}</div>
            </div>
        </div>
    )
}

export default Service