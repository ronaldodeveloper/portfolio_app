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
          <Link to='/portifolio' className="menu_list_items">Portifólio</Link></li>
        <li className="menu_list">
          <Link to='/contato' className="menu_list_items">Contato</Link></li>
      </ul>;
 }
      
//  const MenuHorizontal= 
//       <ul className="box_menuHorizontal_list">
//         <li className="menuHorizontal_list">
//           <a href="" className="menuHorizontal_list_items">Home</a></li>
//         <li className="menuHorizontal_list">
//           <a href="" className="menuHorizontal_list_items">Aboult</a></li>
//         <li className="menuHorizontal_list">
//           <a href="" className="menuHorizontal_list_items">Services</a></li>
//         <li className="menuHorizontal_list">
//           <a href="" className="menuHorizontal_list_items">Products</a></li>
//         <li className="menuHorizontal_list">
//           <a href="" className="menuHorizontal_list_items afterOf">Contact</a></li>
//       </ul>;

   return (
         <nav className="navagation">
           {/* {MenuHorizontal} */}
           <div className="box_menu_icon" onClick={toggleAtive}>
             <div className="menu_icon menu_icon_top"></div>
             <div className="menu_icon menu_icon_center"></div>
             <div className="menu_icon menu_icon_botton"></div>
           </div>
           {MenuToggle}
         </nav>
   )
}