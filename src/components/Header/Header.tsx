import { BaseSyntheticEvent } from "react"
import "./Header.scss"
export function Header({setShowMenu}: 
    {
        setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
      
    }) {

    function handleClickMenu(event: BaseSyntheticEvent) {
        setShowMenu(event?.target.checked)
    }

    return (
        <header>
            <img src="/navicon.svg" alt="" />
            <input 
                className="menu-checkbox" 
                type="checkbox" 
                onClick={(event) => handleClickMenu(event)}
            />
            <h1>interval</h1>
        </header>
    )
}
