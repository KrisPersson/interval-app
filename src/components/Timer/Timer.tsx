import "./Timer.scss"

import useTimer from 'easytimer-react-hook'

export function Timer() {
    const [timer, isTargetAchieved] = useTimer({
        precision: "seconds",
        countdown: true 
    })
}
