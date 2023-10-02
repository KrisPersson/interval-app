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
import { CurrentView } from "./types/index"



function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState<boolean>(true)
  const [currentView, setCurrentView] = useState<CurrentView>('SetTimer')


  const [timer, isTargetAchieved] = useTimer({
      precision: "seconds",
      countdown: true 
  })

  return (
    <div className='app'>
     {
      showLoadingScreen ? 
      <Loading setShowLoadingScreen={setShowLoadingScreen} /> 
      : <SetTimer currentView={currentView} />
     
     }
    </div>
  )
}

export default App
