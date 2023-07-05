import React from 'react'

import styles from './TimerCountdown.module.scss'
import Title from '@/components/Title/Title.tsx'
import Button from '@/components/Button/Button.tsx'

const TimerCountdown: React.FC = () => {
  const handleStartTimer = () => {
    // test
  }

  return (
    <div className={styles.wrapper}>
      <Title className={styles.time} level={1}>00:00:00</Title>
      <div className={styles.buttons}>
        <Button onClick={handleStartTimer}>Старт</Button>
        <Button>Пауза</Button>
        <Button>Сброс</Button>
      </div>
    </div>
  )
}

export default TimerCountdown