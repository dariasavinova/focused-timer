import React from 'react'

import styles from './NewTaskCreation.module.scss'

import TextInput from '@/components/TextInput/TextInput.tsx'
import Button from '@/components/Button/Button.tsx'

const NewTaskCreation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <TextInput className={styles.input} placeholder={'Создать новую задачу'} />
      <Button>+</Button>
    </div>
  )
}

export default NewTaskCreation