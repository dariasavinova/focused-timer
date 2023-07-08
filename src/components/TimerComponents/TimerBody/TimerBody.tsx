import React from 'react'

import styles from './TimerBody.module.scss'

import Title from '@/components/Title/Title.tsx'
import TimerCountdown from '@/components/TimerComponents/TimerCountdown/TimerCountdown.tsx'
import { useAppSelector } from '@/hooks/storeDefaultHooks.ts'

const TimerBody: React.FC = () => {
  const activeTask = useAppSelector(state => state.taskSlice.activeTask)

  const resultTimeToDisplay = activeTask.totalTaskHours.hours ?
    `Всего времени - ${activeTask.totalTaskHours.hours} ч. ${activeTask.totalTaskHours.minutes} мин.` :
    activeTask.totalTaskHours.minutes ?
      `Всего времени - ${activeTask.totalTaskHours.minutes} мин.` :
      `Скоро вам будут доступны данные о вложенном в задачу времени.`

  return (
    <>
      <Title className={styles.description} level={5}>
        Текущая задача:
        <span className={styles.description__taskName}>{activeTask.taskName}</span>
      </Title>
      <TimerCountdown />
      <Title className={styles.time} level={5}>{resultTimeToDisplay}</Title>
    </>
  )
}

export default TimerBody