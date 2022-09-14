import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SidebarItem.css'

function SidebarItem({ Icon, text, link }) {
  return (
    <>
        <Link to= {link} className='sidebarItem'>
          <Icon className='sidebarIcon' />
          {text}
        </Link>
    </>
  )
}

export default SidebarItem