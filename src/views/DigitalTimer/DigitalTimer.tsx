import "./DigitalTimer.scss"
import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { CurrentView } from "../../types"
import { Button } from "../../components/Button/Button"

import { TimeCounter } from 'easytimer.js';
import React from 'react';

interface TimerInput {
    isTargetAchieved: boolean;
    timeValues: TimeCounter;
}

export function DigitalTimer({currentView, timer}: {currentView: CurrentView, timer: Timer}) {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <div className='view view--digital-timer'>
        <Header
        setShowMenu={setShowMenu} 
        />
        {
            showMenu ? 
            <NavMenu currentView={currentView} /> :
            <section className='timer-display'>
                { timer.getTimeValues().toString() }
            </section>
        }
    </div>
    )
}
