import "./SetTimer.scss"
import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { CurrentView } from "../../types"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { Button } from "../../components/Button/Button"
export function SetTimer() {

    const [pickedTime, setPickedTime] = useState<number>(5)
    const [intervalsChecked, setIntervalsChecked] = useState<boolean>(false)
    const [breakIntervalsChecked, setBreakIntervalsChecked] = useState<boolean>(false)


    function handleStartTimer() {
        console.log('Clicked')
    }

    function handleIncrease() {
        setPickedTime(prev => prev + 1)
    }
    function handleDecrease() {
        setPickedTime(prev => prev > 1 ? prev - 1 : prev)
    }

    function handleCheckIntervals(event: React.ChangeEvent<HTMLInputElement>) {
        setIntervalsChecked(event?.currentTarget.checked)
        if (!event?.currentTarget.checked) setBreakIntervalsChecked(false)
    }
    function handleCheckBreakIntervals(event: React.ChangeEvent<HTMLInputElement>) {
        setBreakIntervalsChecked(event?.currentTarget.checked)
        if (event?.currentTarget.checked) setIntervalsChecked(event?.currentTarget.checked)
    }

 return (
    <div className='view view--set-timer'>
        <section className='set-timer-section'>
            <section className='time-picker'>
                <img onClick={handleDecrease} className="arrow arrow--decrease" src="/vector-left.svg" alt="" />
                <p className='time-picker__time-display'>{ pickedTime }</p>
                <img onClick={handleIncrease} className="arrow arrow--increase" src="/vector-left.svg" alt="" />
                <p className="time-picker__minutes">{pickedTime === 1 ? 'minute' : 'minutes'}</p>
            </section>
            <ul className='options'>
                <li><label><input onChange={(event) => handleCheckIntervals(event)} type='checkbox' checked={intervalsChecked} /> intervals</label></li>
                <li><label><input onChange={(event) => handleCheckBreakIntervals(event)} type='checkbox' checked={breakIntervalsChecked} /> 5 min break / interval</label></li>
            </ul>
        </section>
        <section className='button-container'>
            <Button
                text="Start Timer"
                size="big"
                color="Dark"
                clickHandler={handleStartTimer}
            />
        </section>
    </div>    
 )
}
