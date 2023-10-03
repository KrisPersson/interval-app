import { TimeValues } from "../types"
export function parseTimeForDisplay(timeCounter: TimeValues) {
    const {seconds, minutes} = timeCounter
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}