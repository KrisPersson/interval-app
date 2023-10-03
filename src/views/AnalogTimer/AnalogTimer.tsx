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
        <div className='view view--analog-timer'>
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
                <section className='analog-clock-display'>
                    <img className="clock-body" src="/analog-clock.svg" alt="" />
                    <img className="small-handle" style={{transform: `rotate(${timer.getTimeValues().seconds * 6}deg)`}} src="/small-handle.svg" alt="" />
                    <img className="big-handle" style={{transform: `rotate(${timer.getTimeValues().minutes * 6}deg)`}} src="/big-handle.svg" alt="" />


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
