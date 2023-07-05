import React, { useState } from 'react'

import styles from './TimerCountdown.module.scss'

import Title from '@/components/Title/Title.tsx'
import Button from '@/components/Button/Button.tsx'
import { formatTimerValueWithZero } from '@/utils/formatTimerValueWithZero.ts'
import { useIncreaseTimer } from '@/hooks/useIncreaseTimer.ts'
// import { useAppSelector } from '@/hooks/storeDefaultHooks.ts'

const TimerCountdown: React.FC = () => {
  // const activeTask = useAppSelector(state => state.taskSlice.activeTask)

  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timerValue, setTimerValue] = useState({ hours: 0, minutes: 0, seconds: 0 })
  let timerInterval: NodeJS.Timer

  useIncreaseTimer(isTimerRunning, setTimerValue)

  const handleStartTimer = () => {
    setIsTimerRunning(true)
  }

  const handlePauseTimer = () => {
    setIsTimerRunning(false)
    clearInterval(timerInterval)
  }

  return (
    <div className={styles.wrapper}>
      <Title className={styles.time} level={1}>
        {formatTimerValueWithZero(timerValue.hours)}:
        {formatTimerValueWithZero(timerValue.minutes)}:
        {formatTimerValueWithZero(timerValue.seconds)}
      </Title>
      <div className={styles.buttons}>
        <Button onClick={handleStartTimer}>Старт</Button>
        <Button onClick={handlePauseTimer}>Пауза</Button>
        <Button>Сброс</Button>
      </div>
    </div>
  )
}

export default TimerCountdown