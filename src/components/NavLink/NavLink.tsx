import './NavLink.scss'
import { CurrentView } from "../../types"

export function NavLink({currentView, id, displayText, clickHandler}: {currentView: CurrentView, id: CurrentView, displayText: string, clickHandler: (destination: CurrentView) => void}) {

    function handleClick(id: CurrentView) {
        if (currentView !== id) clickHandler(id)
    }

    return (
        <li
            onClick={() => handleClick(id)}
            className={
                currentView.toLowerCase() === id.toLowerCase() ?
                "nav-link nav-link--current" :
                "nav-link"
            } 
            id={id}
        >
            { displayText }
        </li>

    )
}