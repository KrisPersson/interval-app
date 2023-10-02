import "./NavMenu.scss"
import { CurrentView } from "../../types"
import { NavLink } from "../NavLink/NavLink"
export function NavMenu({currentView}:{currentView: CurrentView}) {

    return (
        <nav className='nav-menu'>
            <ul>
                <NavLink 
                    currentView={currentView}
                    id="DigitalTimer"
                    displayText="Digital Timer" 
                />
                <NavLink 
                    currentView={currentView}
                    id="AnalogTimer"
                    displayText="Analog Timer" 
                />
            </ul>
        </nav>
    )
}
