import React from 'react'

import styles from './Timer.module.scss'

import Title from '@/components/Title/Title.tsx'
import TimerBody from '@/components/TimerComponents/TimerBody/TimerBody.tsx'

const Timer: React.FC = () => (
  <>
    <Title className={styles.title} level={3}>Таймер</Title>
    <TimerBody />
  </>
)


export default Timer