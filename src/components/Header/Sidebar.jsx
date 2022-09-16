import { FaTimes } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { Container, Content } from '../../styles/sidebarStyle';
import SidebarItem from './SidebarItem';

function Sidebar({ active }) {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <>
            <Container sidebar= {active}>
                <FaTimes onClick= {closeSidebar} />
                <Content>
                    <SidebarItem Icon={AiOutlineFieldTime} text= 'Agende seu horário' link='/' />
                    <SidebarItem Icon={BsFillPersonFill} text= 'Cadastro' link='/cadastros' />
                </Content>
            </Container>
        </>
    )
}

export default Sidebar