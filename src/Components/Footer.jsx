import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaRegChartBar } from "react-icons/fa";
import './footer.scss'

export const Footer=()=>{
    return(
        <footer>
                <div className='footerInfo'>
                    <FaRegChartBar className='bgIcon-left'/> 
                    <p className='althor'>by ronaldo mariano <small>2021</small></p>
                </div>
                
                <nav>
                    <a href='#' 
                       className="socialMediaIcon"><FaInstagram className='bgIcon'/></a>
                    <a href='https://github.com/ronaldodeveloper'
                       className="socialMediaIcon"><FaGithub className='bgIcon'/></a>
                    <a href='#' 
                       className="socialMediaIcon"><FaWhatsapp className='bgIcon'/></a>
                    <a href='https://www.linkedin.com/in/ronaldo-mariano' 
                       className="socialMediaIcon"><FaLinkedin className='bgIcon'/></a>
                </nav>
        </footer>
    )
}