import React, { ChangeEvent, useState } from 'react'

import styles from './TaskItem.module.scss'

import InputGroup from '@/components/InputGroup/InputGroup.tsx'
import TextInput from '@/components/TextInput/TextInput.tsx'
import TaskItemPopup from '@/components/TasksComponents/TaskItemPopup/TaskItemPopup.tsx'
import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { editCurrentTask } from '@/store/slices/taskSlice.ts'

interface TaskItemProps {
  taskId: string
  taskName: string
}

const TaskItem: React.FC<TaskItemProps> = ({ taskId, taskName }) => {
  const dispatch = useAppDispatch()
  const [isInputDisabled, setIsInputDisabled] = useState(true)
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const handleClickDetails = () => {
    setIsPopupVisible(!isPopupVisible)
  }

  const handleEditCurrentInput = (e: ChangeEvent) => {
    dispatch(editCurrentTask({ taskId, taskName: (e.target as HTMLInputElement).value }))
  }

  return (
    <InputGroup className={styles.wrapper}>
      <TextInput
        className={styles.input}
        value={taskName}
        onChange={(e) => handleEditCurrentInput(e)}
        disabled={isInputDisabled}
      />
      <div className={styles.details} onClick={handleClickDetails}>...</div>
      {isPopupVisible &&
        <TaskItemPopup className={styles.popup}
                       setIsInputDisabled={setIsInputDisabled}
                       setIsPopupVisible={setIsPopupVisible} />}
    </InputGroup>
  )
}

export default TaskItem