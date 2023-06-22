import React from 'react'

import styles from './Home.module.scss'

import NewTaskCreation from '@/components/NewTaskCreation/NewTaskCreation.tsx'
import Title from '@/components/Title/Title.tsx'

const Home: React.FC = () => {
  return (
    <>
      <Title className={styles.title} level={3}>Все задачи</Title>
      <NewTaskCreation />
    </>
  )
}

export default Home