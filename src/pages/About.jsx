import React from 'react';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'

// ICONS
import { FaReact, FaNodeJs, FaGitAlt, FaSass, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiCss3, SiHtml5, SiWebpack, SiBabel, SiAdobephotoshop } from "react-icons/si";
import { VscJson } from "react-icons/vsc";





import './stylesheet/about.scss'

export const About= ()=>{
    return (
        <section className="container">
        <Menu/>
        <main className='about'>
            <section className='aboutMe'>
                   <div className="borderDetailsTop"></div>
                    <h2>Quem sou</h2>
                    <p>
                        Meu nome é Ronaldo Mariano, sou natural do Rio de Janeiro. Estudante do curso de Sistema para Internet, desenvolvedor Front End, entusiasta UX design e pesquisador de tecnologias web...
                    </p>
                    <div className="borderDetailsBottom"></div>
            </section>

            <section className="aboutSkills">
                {/* <article>
                    <h2>O que faço</h2>
                    <p>Desenvolvo aplicações e sistemas web...</p>
                </article> */}

                <article>
                    <h3>SKILLS</h3>
                    <h4>LINGUAGENS</h4>
                    <div> 
                        <SiCss3 className='iconSkills css'/>
                        <SiHtml5 className='iconSkills html'/> 
                        <SiJavascript className='iconSkills javascript'/>
                        <FaNodeJs className='iconSkills node'/>
                        
                    </div>
                    <h4>FRAMEWORKS E BIBLIOTECAS</h4>
                    <div>
                        <FaReact className='iconSkills react'/>
                        <FaGitAlt className='iconSkills git'/>
                        <FaBootstrap className='iconSkills bootstrap'/>                
                        <FaSass className='iconSkills sass'/>
                        <VscJson className='iconSkills json'/>
                    </div>
                    <h4>OUTROS CONHECIMENTOS</h4>
                    <div>
                        <SiWebpack className='iconSkills webpack'/>
                        <SiBabel className='iconSkills babel'/>
                        <SiAdobephotoshop className='iconSkills photoshop'/>
                    </div>
                </article>
            </section>
        </main>
        <Footer/>
        </section>
    )
}