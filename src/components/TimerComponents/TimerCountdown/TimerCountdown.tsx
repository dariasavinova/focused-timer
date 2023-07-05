import React, { useState } from 'react'

import styles from './TimerCountdown.module.scss'

import Title from '@/components/Title/Title.tsx'
import Button from '@/components/Button/Button.tsx'
import { formatTimerValueWithZero } from '@/utils/formatTimerValueWithZero.ts'
// import { useAppSelector } from '@/hooks/storeDefaultHooks.ts'

const TimerCountdown: React.FC = () => {
  // const activeTask = useAppSelector(state => state.taskSlice.activeTask)

  const [timerValue, setTimerValue] = useState({ hours: 0, minutes: 0, seconds: 0 })

  const handleStartTimer = () => {
    const timerInterval = setInterval(() => {
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
      return () => clearInterval(timerInterval)
    }, 1000)
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
        <Button>Пауза</Button>
        <Button>Сброс</Button>
      </div>
    </div>
  )
}

export default TimerCountdown