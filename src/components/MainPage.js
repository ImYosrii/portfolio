import React from 'react';
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {FaReact} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiRedux} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {SiPython} from 'react-icons/si'
import { SiThreedotjs } from "react-icons/si";

import Projects from './Projects'
import Certificates from './Certificates'
import ProjectsDataObject from '../data/ProjectsDataObject'
import CertificatesDataObject from '../data/CertificatesDataObject'
export default function MainPage(){
    const projects = ProjectsDataObject.map(project => 
    <Projects img={project.img} title={project.title} key={project.id}
              description={project.description} url={project.url} date={project.date}/>)
              
    const certificates = CertificatesDataObject.map(certificate => 
    <Certificates img={certificate.img} title={certificate.title} key={certificate.id}
                  url={certificate.url} date={certificate.date}/>)
    return (
        <>  
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className="header">Welcome</h1>
            </div>
            <div className="intro-container">
                <h2 className="intro-header">Who am I</h2>
                <p className="intro-details">Yosri, a Creative Web Developer. I am a graduate student of the University of Alberta. I enjoy creating unforgettable interactive websites experiences utilizing skills such as R3F, ThreeJS, GLSL, and Blender.  </p>
                <h2 className="intro-header">Skills</h2>
                <div className='skills-container'>
                    <p className="skill-three">
                        <SiThreedotjs />

                    </p>
                    <p className="skill-react">
                        <FaReact />
                    </p>
                    <p className="skill-html">
                        <AiOutlineHtml5 />
                    </p>
                    <p className="skill-css">
                        <SiCss3 />
                    </p>
                    <p className="skill-js">
                        <TbBrandJavascript />

                    </p>
                    <p className="skill-redux">
                    <SiRedux />
                    </p>
                    <p className="skill-bootstrap">
                    <FaBootstrap />
                    </p>
                    <p className="skill-python">
                    <SiPython />
                    </p>
                </div>
                <h2 className="intro-header">Contact me</h2>
                <div className="intro-links" >
                    <a href="mailto:yosrisaed99@gmail.com" target="_blank"><MdOutlineMail /></a>
                    <a href="https://github.com/ImYosrii" target="_blank"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/yosri-swidan-698267229/" target="_blank"><BsLinkedin /></a>
                    <a href="https://api.whatsapp.com/send?phone=17806040522" target="_blank"><BsWhatsapp /></a>
                </div>
            </div>
            <div id='projects' style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className="projects-header">Projects</h1>
            </div>
            <div className='projects-container'>
                {projects}
            </div>
            <div id='certificates' style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className="certificates-header">Certificates</h1>
            </div>
            <div className='certificates-container'>
                {certificates}
            </div>
        </>
    )
}
