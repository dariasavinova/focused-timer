import React from 'react'

import styles from './TimerBody.module.scss'

import Title from '@/components/Title/Title.tsx'
import TimerCountdown from '@/components/TimerComponents/TimerCountdown/TimerCountdown.tsx'
import { useAppSelector } from '@/hooks/storeDefaultHooks.ts'
import { handleGetTaskNameFromId } from '@/utils/getTaskNameFromId.ts'

const TimerBody: React.FC = () => {
  const { tasks, activeTaskId } = useAppSelector(state => state.taskSlice)

  return (
    <>
      <Title className={styles.description} level={5}>
        Текущая задача:
        <span className={styles.description__taskName}>{handleGetTaskNameFromId(tasks, activeTaskId)}</span>
      </Title>
      <TimerCountdown />
    </>
  )
}

export default TimerBody