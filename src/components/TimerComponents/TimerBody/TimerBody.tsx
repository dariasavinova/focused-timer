import React from 'react'

import styles from './TimerBody.module.scss'

import Title from '@/components/Title/Title.tsx'
import TimerCountdown from '@/components/TimerComponents/TimerCountdown/TimerCountdown.tsx'
import { useAppSelector } from '@/hooks/storeDefaultHooks.ts'

const TimerBody: React.FC = () => {
  const activeTask = useAppSelector(state => state.taskSlice.activeTask)

  return (
    <>
      <Title className={styles.description} level={5}>
        Текущая задача:
        <span className={styles.description__taskName}>{activeTask.taskName}</span>
      </Title>
      <TimerCountdown />
    </>
  )
}

export default TimerBody