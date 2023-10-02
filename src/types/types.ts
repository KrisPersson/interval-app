
export type CurrentView = "SetTimer" | "AnalogTimer" | "DigitalTimer" | "AlarmView" | "PauseView" 

export interface TimerSettings {
    minutes: number,
    intervals: boolean,
    fiveMinBreak: boolean
}