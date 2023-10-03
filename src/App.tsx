import { useState } from 'react'
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
  const [pickedTime, setPickedTime] = useState<number>(5)
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

  function handleIncrease() {
    setPickedTime(prev => prev + 1)
}
function handleDecrease() {
    setPickedTime(prev => prev > 1 ? prev - 1 : prev)
}

  function handleStartTimer(settings: TimerSettings) {
    const { intervals, fiveMinBreak } = settings 

    setUserSettings({intervals, fiveMinBreak})
    setCurrentView('DigitalTimer')

    timer.start({
      startValues: {
        days: 0,
        hours: 0,
        minutes: pickedTime,
        seconds: 0,
        secondTenths: 0
      },
      target: targetValues,
      precision: "seconds",
      countdown: true,
    })
}

function handleStopTimer() {
  timer.stop()
  setCurrentView('SetTimer')
}

function handleNavLinkClick(destination: CurrentView) {
  setCurrentView(destination)
}

  return (
    <div className='app'>
      {
        showLoadingScreen ? 
        <Loading setShowLoadingScreen={setShowLoadingScreen} /> 
        : isTargetAchieved && !userSettings.intervals ?
        <AlarmView setCurrentView={setCurrentView} timer={timer} />
        : isTargetAchieved && userSettings.fiveMinBreak ?
        <PauseView timer={timer} />
        : isTargetAchieved ? 
        <DigitalTimer isTargetAchieved={isTargetAchieved} currentView={currentView} timer={timer} handleStopTimer={handleStopTimer} handleNavLinkClick={handleNavLinkClick} />
        : currentView === 'SetTimer' ? 
        <SetTimer handleStartTimer={handleStartTimer} handleIncrease={handleIncrease} handleDecrease={handleDecrease} pickedTime={pickedTime} />
        : timer.isRunning() && currentView === 'DigitalTimer' ?
        <DigitalTimer isTargetAchieved={isTargetAchieved} currentView={currentView} timer={timer} handleStopTimer={handleStopTimer} handleNavLinkClick={handleNavLinkClick} />
        : timer.isRunning() && currentView === 'AnalogTimer' ? 
        <AnalogTimer currentView={currentView} timer={timer} handleStopTimer={handleStopTimer} handleNavLinkClick={handleNavLinkClick} />
        : <p>nothing :(</p>
      }
    </div>
  )
}

export default App
