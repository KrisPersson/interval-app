
export type CurrentView = "SetTimer" | "AnalogTimer" | "DigitalTimer" | "AlarmView" | "PauseView" 

export interface TimerSettings {
    minutes: number,
    intervals: boolean,
    fiveMinBreak: boolean
}

export interface TimeValues {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    secondTenths: number;
}

export interface UserSettings {
    intervals: boolean,
    fiveMinBreak: boolean
}