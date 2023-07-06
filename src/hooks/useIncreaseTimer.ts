import React, { useEffect, useMemo } from 'react'

import { TotalTaskHours } from '@/store/slices/taskSlice.ts'

export const useIncreaseTimer = (
  isTimerRunning: boolean,
  timerValue: TotalTaskHours,
  setTimerValue: React.Dispatch<React.SetStateAction<TotalTaskHours>>
) => {
  if (window.Worker) {
    const timerWorker = useMemo(() =>
        new Worker(new URL('@/workers/timerInterval.ts', import.meta.url),
          { type: 'module' }),
      []
    )

    useEffect(() => {
      timerWorker.postMessage(isTimerRunning ? timerValue : 'pause')
    }, [isTimerRunning, timerValue])

    useEffect(() => {
      timerWorker.onmessage = message => {
        setTimerValue(message.data)
      }
    }, [timerWorker])
  }

  return timerValue
}
