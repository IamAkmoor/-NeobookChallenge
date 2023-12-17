import '../styles/SidebarBackground.css'
import frame from '../assets/Frame 851212072.png'

export default function SidebarBackground() {
    
    return (
        <div className="login__container-logo">
            <img src={frame} alt="logo" className='logo' />
        </div>
    )
}