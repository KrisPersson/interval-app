import "./PauseView.scss"

import useTimer from 'easytimer-react-hook'
import { Timer } from "easytimer.js"
import { Button } from "../../components/Button/Button"
import { CircleLayers } from "../../components/CircleLayers/CircleLayers"
import { parseTimeForDisplay } from "../../utils"

export function PauseView({ timer }: { timer: Timer}) {
    
    function skipPauseHandler() {
        timer.reset()
    }

    const [pauseTimer, isTargetAchieved] = useTimer({
        startValues: {
            minutes: 5,
            seconds: 0
        },
        target: {
            minutes: 0,
            seconds: 0
        },
        precision: "seconds",
        countdown: true,
        updateWhenTargetAchieved: true
    })
    
    if (isTargetAchieved) {
        pauseTimer.reset()
        pauseTimer.stop()

        timer.reset()
    }

    pauseTimer.start()

    return (
        <div className='view view--pause-view'>
            
        {
            <>
                <section className='mid-section'>
                    <CircleLayers logo={'pause-icon'} />
                    <h1>Pause & breathe</h1>
                    <h2>{ parseTimeForDisplay(pauseTimer.getTimeValues()) }</h2>
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
