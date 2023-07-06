import React, { useEffect, useRef, useState } from 'react'

import styles from './TimerCountdown.module.scss'

import Title from '@/components/Title/Title.tsx'
import Button from '@/components/Button/Button.tsx'
import { formatTimerValueWithZero } from '@/utils/formatTimerValueWithZero.ts'
import { useIncreaseTimer } from '@/hooks/useIncreaseTimer.ts'
import { saveTotalTaskHours } from '@/store/slices/taskSlice.ts'
import { useAppDispatch, useAppSelector } from '@/hooks/storeDefaultHooks.ts'

const TimerCountdown: React.FC = () => {
  const activeTask = useAppSelector(state => state.taskSlice.activeTask)
  const dispatch = useAppDispatch()

  const initialTimerObject = { hours: 0, minutes: 0, seconds: 0 }
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timerValue, setTimerValue] = useState(initialTimerObject)
  const timerValueRef = useRef(initialTimerObject)

  useIncreaseTimer(isTimerRunning, timerValue, setTimerValue)

  useEffect(() => {
    timerValueRef.current = timerValue
  }, [timerValue])

  useEffect(() => {
    return () => {
      dispatch(saveTotalTaskHours({ id: activeTask.id, totalTaskHours: timerValueRef.current }))
    }
  }, [])

  const handleResetTimer = () => {
    setIsTimerRunning(false)
    setTimerValue(initialTimerObject)
  }

  return (
    <div className={styles.wrapper}>
      <Title className={styles.time} level={1}>
        {formatTimerValueWithZero(timerValue.hours)}:
        {formatTimerValueWithZero(timerValue.minutes)}:
        {formatTimerValueWithZero(timerValue.seconds)}
      </Title>
      <div className={styles.buttons}>
        <Button onClick={() => setIsTimerRunning(true)} disabled={isTimerRunning}>Старт</Button>
        <Button onClick={() => setIsTimerRunning(false)} disabled={!isTimerRunning}>Пауза</Button>
        <Button
          onClick={handleResetTimer}
          disabled={timerValue.hours === 0 && timerValue.minutes === 0 && timerValue.seconds === 0}>
          Сброс
        </Button>
      </div>
    </div>
  )
}

export default TimerCountdown