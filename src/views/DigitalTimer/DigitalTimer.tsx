import "./DigitalTimer.scss"
import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { CurrentView } from "../../types"
import { Button } from "../../components/Button/Button"
import { parseTimeForDisplay } from "../../utils"

import { Timer } from 'easytimer.js';


export function DigitalTimer({currentView, timer, handleStopTimer}: {currentView: CurrentView, timer: Timer, handleStopTimer: () => void}) {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className='view view--digital-timer'>
        <Header
        setShowMenu={setShowMenu} 
        />
        {
            showMenu ? 
            <NavMenu currentView={currentView} /> :
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
