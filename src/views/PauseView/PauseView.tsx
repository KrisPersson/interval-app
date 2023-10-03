import "./PauseView.scss"

import useTimer from 'easytimer-react-hook'
import { Timer } from "easytimer.js"
import { Button } from "../../components/Button/Button"
import { CircleLayers } from "../../components/CircleLayers/CircleLayers"
import { CurrentView } from "../../types"

export function PauseView({ timer, setCurrentView }: { timer: Timer, setCurrentView: (currentView: CurrentView) => void }) {
    
    const [pauseTimer, isTargetAchieved] = useTimer({
        startValues: {
            minutes: 5
        },
        target: {
            minutes: 0
        }
    })

    function skipPauseHandler() {
        timer.reset()
        setCurrentView('DigitalTimer')
    }

    return (
        <div className='view view--alarm-view'>
            
        {
            <>
                <section className='mid-section'>
                    <CircleLayers logo={'pause-icon'} />
                    <h1>Pause & breathe</h1>
                </section>
                <section className='button-container'>
                <Button
                    text="Skip pause, go now!"
                    size="small"
                    color="Light"
                    clickHandler={skipPauseHandler}
                />
                </section>
            </>
        }
        </div>
    )
}
