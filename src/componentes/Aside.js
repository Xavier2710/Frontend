import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import { IconContext } from 'react-icons';
import "./Aside.css";
export default function Aside() {
  const [sidebar, setSidebar] = useState(false);



  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className={`navbar ${sidebar ? 'menu-open' : ''}`}>
        <Link to='#' className='menu-bars'>
          <FaBars onClick={showSidebar} />
        </Link>
        <div className='titulo-container'>
          <h1 className='page-title'>Impacto de atención primaria y salud pública en estudiantes de médicina</h1>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  </>
  );
}