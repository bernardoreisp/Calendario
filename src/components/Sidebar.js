import { FaTimes, FaHome,} from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai"
import { Container, Content } from '../styles/sidebarStyle';
import SidebarItem from './SidebarItem';

function Sidebar({active}) {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <>
            <Container sidebar={active}>
                <FaTimes onClick={closeSidebar}/>
                <Content>
                    <SidebarItem Icon={FaHome} text= 'Home' />
                    <SidebarItem Icon={AiOutlineFieldTime} text= 'Agende seu horário' />
                </Content>
            </Container>
        </>
    )
}

export default Sidebar