import React, { useEffect } from 'react'

import styles from './TimerBody.module.scss'

import Title from '@/components/Title/Title.tsx'
import TimerCountdown from '@/components/TimerComponents/TimerCountdown/TimerCountdown.tsx'
import { useAppDispatch, useAppSelector } from '@/hooks/storeDefaultHooks.ts'
import { changeActiveTask } from '@/store/slices/taskSlice.ts'

const TimerBody: React.FC = () => {
  const { tasks, activeTask } = useAppSelector(state => state.taskSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const desiredActiveTask = tasks?.find(task => task.id === activeTask.id)!
    dispatch(changeActiveTask(desiredActiveTask))
  }, [])

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