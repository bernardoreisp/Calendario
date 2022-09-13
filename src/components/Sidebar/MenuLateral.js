import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import '../../styles/MenuLateral.css'

function MenuLateral() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='containerMenu'>
                <FaBars className='menuIcon' onClick={showSidebar} />
                {sidebar && <Sidebar active={setSidebar} />}
            </div>
        </>
    )
}

export default MenuLateral