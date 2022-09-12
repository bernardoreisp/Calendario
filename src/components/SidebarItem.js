import React from 'react';

function SidebarItem ({Icon, text}) {
    return (
        <>
          <div className='sidebarItem'>
            <Icon className='sidebarIcon'/>
            {text}
          </div>  
        </>
    )
}

export default SidebarItem