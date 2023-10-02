import "./DigitalTimer.scss"
import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { CurrentView } from "../../types"
import { Button } from "../../components/Button/Button"

export function DigitalTimer({currentView}: {currentView: CurrentView}) {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <div className='view view--set-timer'>
        <Header
        setShowMenu={setShowMenu} 
        />
        {
            showMenu ? 
            <NavMenu currentView={currentView} /> :
            <section className='set-timer-section'>
                
            </section>
        }
    </div>
    )
}
