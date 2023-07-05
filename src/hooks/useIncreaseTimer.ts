import React, { useEffect } from 'react'

let timerInterval: NodeJS.Timer

export const useIncreaseTimer = (isTimerRunning: boolean, setTimerValue: React.Dispatch<React.SetStateAction<{
  hours: number,
  minutes: number,
  seconds: number
}>>) => {
  useEffect(() => {
    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        setTimerValue(prev => {
          if (prev.seconds < 60) {
            return { ...prev, seconds: prev.seconds + 1 }
          } else {
            if (prev.minutes < 60) {
              return { ...prev, minutes: prev.minutes + 1, seconds: 0 }
            } else {
              return { ...prev, hours: prev.hours + 1, minutes: 0, seconds: 0 }
            }
          }
        })
      }, 2)
    }
    return () => clearInterval(timerInterval)
  }, [isTimerRunning])
}
