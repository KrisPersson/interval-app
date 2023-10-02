import { CurrentView } from "../../types"

export function NavLink({currentView, id, displayText}: {currentView: CurrentView, id: CurrentView, displayText: string}) {

    return (
        <li
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