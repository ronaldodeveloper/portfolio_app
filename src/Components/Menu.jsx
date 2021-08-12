import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './menu.scss';

export const Menu= ()=>{

  const [showMenu, setShowMenu]= useState(false);
  function toggleAtive(e) {
    setShowMenu(!showMenu)
    // Effect Icons
    const btnEffectTop= document.querySelector('.menu_icon_top')
    const btnEffectCenter= document.querySelector('.menu_icon_center')
    const btnEffectBotton= document.querySelector('.menu_icon_botton')
    btnEffectTop.classList.toggle('ActiveEffectIconTop')
    btnEffectCenter.classList.toggle('ActiveEffectIconCenter')
    btnEffectBotton.classList.toggle('ActiveEffectIconBotton')

    // menuCicle
    const menuCicleOff= document.querySelector('.menuCicle')
    menuCicleOff.classList.toggle('menuCicleOn')
  }

let MenuToggle;
 if (showMenu){
    MenuToggle = 
      <ul className="box_menu_list">
        <li className="menu_list">
          <Link to='/' className="menu_list_items">Home</Link></li>
        <li className="menu_list">
          <Link to='/sobre' className="menu_list_items">Sobre</Link></li>
        <li className="menu_list">
          <Link to='/portifolio' className="menu_list_items">Portfólio</Link></li>
        <li className="menu_list">
          <Link to='/contato' className="menu_list_items">Contato</Link></li>
      </ul>;
 }
      

   return (
    <header className="menuContent">
       <div><p className="logo"><strong>r</strong><strong>m.</strong></p></div>
         <nav className="navagation">
           <div className='menuCicle'></div>{/* MENU CICLE */}
           <div className="box_menu_icon" onClick={toggleAtive}>
             <div className="menu_icon menu_icon_top"></div>
             <div className="menu_icon menu_icon_center"></div>
             <div className="menu_icon menu_icon_botton"></div>
           </div>
           {MenuToggle}
         </nav>
    </header>
   )
}


            // <header className="menuContent">
            //   <div><p className="logo"><strong>r</strong><strong>m.</strong></p></div>
            //  <Menu/>
            // </header>