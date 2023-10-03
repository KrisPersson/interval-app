import "./AlarmView.scss"

import { CurrentView } from "../../types"
import { Button } from "../../components/Button/Button"
import { Timer } from "easytimer.js"
import { CircleLayers } from "../../components/CircleLayers/CircleLayers"

export function AlarmView({setCurrentView, timer}: {setCurrentView: React.Dispatch<React.SetStateAction<CurrentView>>, timer: Timer}) {

    function clickHandler() {
        timer.reset()
        timer.stop()
        setCurrentView('SetTimer')
    }

    return (
        <div className='view view--alarm-view'>
            
        {
            <>
                <section className='mid-section'>
                    <CircleLayers logo={'alarm-icon'} />
                    <h1>Times up!</h1>
                </section>
                <section className='button-container'>
                <Button
                    text="Set New Timer"
                    size="small"
                    color="Light"
                    clickHandler={clickHandler}
                />
                </section>
            </>
        }
        </div>
    )
}
