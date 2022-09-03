import React from 'react';

export default function Certificates(props){
    return (
        <div className='certificate-container'>
            <img className='certificate-image' src={props.img} />
            <h1 className='certificate-title'>{props.title}</h1>
            <a className='certificate-link' href={props.url} target='_blank'><button>Link</button></a>
            <p className='certificate-date'>Finished: {props.date}</p>
        </div>
    )
}