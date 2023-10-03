import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import useTimer from 'easytimer-react-hook'

import { AlarmView } from "./views/AlarmView/AlarmView"
import { PauseView } from "./views/PauseView/PauseView"
import { AnalogTimer } from "./views/AnalogTimer/AnalogTimer"
import { DigitalTimer } from "./views/DigitalTimer/DigitalTimer"
import { Loading } from "./views/Loading/Loading"
import { SetTimer } from "./views/SetTimer/SetTimer"
import { CurrentView, TimerSettings, TimeValues, UserSettings } from "./types/index"




function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState<boolean>(true)
  const [currentView, setCurrentView] = useState<CurrentView>('SetTimer')
  const [userSettings, setUserSettings] = useState<UserSettings>({
    intervals: false,
    fiveMinBreak: false
  })

  const targetValues: TimeValues = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    secondTenths: 0
  }

  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true
  })

  function handleStartTimer(settings: TimerSettings) {
    const { minutes, intervals, fiveMinBreak } = settings 

    setUserSettings({intervals, fiveMinBreak})
    setCurrentView('DigitalTimer')

    timer.start({
      startValues: {
        days: 0,
        hours: 0,
        minutes: minutes,
        seconds: 0,
        secondTenths: 0
      },
      target: targetValues,
      precision: "seconds",
      countdown: true,
    })
}
  return (
    <div className='app'>
      {
        showLoadingScreen ? 
        <Loading setShowLoadingScreen={setShowLoadingScreen} /> 
        : isTargetAchieved ? 
        <h1>Target Achieved!</h1>
        : currentView === 'SetTimer' ? 
        <SetTimer handleStartTimer={handleStartTimer} />
        : <DigitalTimer currentView={currentView} timer={timer} />
      }
    </div>
  )
}

export default App
