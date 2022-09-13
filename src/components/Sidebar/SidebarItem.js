import React from 'react';
import '../../styles/SidebarItem.css'

function SidebarItem({ Icon, text }) {
  return (
    <>
      <button className='sidebarItem'>
        <Icon className='sidebarIcon' />
        {text}
      </button>
    </>
  )
}

export default SidebarItem