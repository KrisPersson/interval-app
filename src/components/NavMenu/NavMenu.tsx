import "./NavMenu.scss"
import { CurrentView } from "../../types"
import { NavLink } from "../NavLink/NavLink"
export function NavMenu({currentView, handleNavLinkClick}:{currentView: CurrentView, handleNavLinkClick: (destination: CurrentView) => void}) {

    return (
        <nav className='nav-menu'>
            <ul>
                <NavLink 
                    currentView={currentView}
                    id="DigitalTimer"
                    displayText="Digital Timer"
                    clickHandler={handleNavLinkClick} 
                />
                <NavLink 
                    currentView={currentView}
                    id="AnalogTimer"
                    displayText="Analog Timer"
                    clickHandler={handleNavLinkClick} 
                />
            </ul>
        </nav>
    )
}
