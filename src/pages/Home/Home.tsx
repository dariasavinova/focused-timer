import React from 'react'

import styles from './Home.module.scss'

import NewTaskCreation from '@/components/TasksComponents/NewTaskCreation/NewTaskCreation.tsx'
import Title from '@/components/Title/Title.tsx'
import TasksList from '@/components/TasksComponents/TasksList/TasksList.tsx'

const Home: React.FC = () => (
  <>
    <Title className={styles.title} level={3}>Все задачи</Title>
    <NewTaskCreation className={styles.newTask} />
    <TasksList />
  </>
)


export default Home