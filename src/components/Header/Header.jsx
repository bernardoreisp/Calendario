import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'
import '../../styles/Header.css'

function Header() {

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

export default Header