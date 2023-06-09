import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './TimerBody.module.scss'

import Title from '@/components/Title/Title.tsx'
import TimerCountdown from '@/components/TimerComponents/TimerCountdown/TimerCountdown.tsx'
import Button from '@/components/Button/Button.tsx'
import { useAppDispatch, useAppSelector } from '@/hooks/storeDefaultHooks.ts'
import { changeActiveTask } from '@/store/slices/taskSlice.ts'

const TimerBody: React.FC = () => {
  const dispatch = useAppDispatch()
  const { tasks, activeTask } = useAppSelector(state => state.taskSlice)
  const [isTasksListVisible, setIsTasksListVisible] = useState(false)

  useEffect(() => {
    const desiredActiveTask = tasks?.find(task => task.id === activeTask.id)!
    dispatch(changeActiveTask(desiredActiveTask))
  }, [])

  let resultTimeToDisplay
  if (tasks.length) {
    resultTimeToDisplay = activeTask.totalTaskHours.hours ?
      `Всего времени - ${activeTask.totalTaskHours.hours} ч. ${activeTask.totalTaskHours.minutes} мин.` :
      activeTask.totalTaskHours.minutes ?
        `Всего времени - ${activeTask.totalTaskHours.minutes} мин.` :
        `Скоро вам будут доступны данные о вложенном в задачу времени.`
  }

  return (
    <>
      {tasks.length ? (
        <>
          <Title className={styles.description} level={5}>
            Текущая задача:
            <span
              className={styles.description__taskName}
              onClick={() => setIsTasksListVisible(!isTasksListVisible)}>
              {activeTask.taskName}
            </span>
          </Title>
          {isTasksListVisible && (
            <ul>
              {tasks.map(task => (
                <li>{task.taskName}</li>
              ))}
            </ul>
          )}
          <TimerCountdown />
          <Title className={styles.time} level={5}>{resultTimeToDisplay}</Title>
        </>
      ) : (
        <div className={styles.empty}>
          <Title className={styles.empty__title} level={5}>Таймер будет доступен с первой созданной задачей.</Title>
          <Link to={'/'}><Button>Вернуться назад</Button></Link>
        </div>
      )}
    </>
  )
}

export default TimerBody