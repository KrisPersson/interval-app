import "./AnalogTimer.scss"
import { Header } from "../../components/Header/Header"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { CurrentView } from "../../types"
import { Button } from "../../components/Button/Button"
import { useState } from "react"
import { parseTimeForDisplay } from "../../utils"
import { Timer } from "easytimer.js"

export function AnalogTimer({currentView, timer, handleStopTimer, handleNavLinkClick}: {currentView: CurrentView, timer: Timer, handleStopTimer: () => void, handleNavLinkClick: (destination: CurrentView) => void }) {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className='view view--digital-timer'>
        <Header
        setShowMenu={setShowMenu} 
        />
        {
            showMenu ? 
            <NavMenu
                currentView={currentView} 
                handleNavLinkClick={handleNavLinkClick}
            /> :
            <>
                <section className='timer-display'>
                    <p>{ parseTimeForDisplay(timer.getTimeValues()) }</p>
                </section>
                <section className='button-container'>
                <Button
                    text="Abort Timer"
                    size="small"
                    color="Dark"
                    clickHandler={handleStopTimer}
                />
                </section>
            </>
        }
    </div>
    )
}
