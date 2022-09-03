import React from 'react';

export default function Projects(props){
    return (
        <div className='project-container'>
            <img className='project-image' src={props.img} />
            <h1 className='project-title'>{props.title}</h1>
            <p className='project-description'>{props.description}</p>
            <a className='project-link' href={props.url} target='_blank'><button>Details</button></a>
            <p className='project-date'>Last updated: {props.date}</p>
        </div>
    )
}