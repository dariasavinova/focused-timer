import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

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
  const textInputRef = useRef<HTMLInputElement>(null)

  const handleClickDetails = () => {
    setIsPopupVisible(!isPopupVisible)
  }

  const handleEditCurrentInput = (e: ChangeEvent) => {
    dispatch(editCurrentTask({ taskId, taskName: (e.target as HTMLInputElement).value }))
  }

  useEffect(() => {
    if (!isInputDisabled && textInputRef.current) {
      textInputRef.current.focus()
    }
  }, [isInputDisabled])

  return (
    <InputGroup className={styles.wrapper}>
      <TextInput
        ref={textInputRef}
        className={styles.input}
        value={taskName}
        onChange={(e) => handleEditCurrentInput(e)}
        disabled={isInputDisabled}
      />
      <div className={styles.details} onClick={handleClickDetails}>...</div>

      {isPopupVisible && (
        <TaskItemPopup
          setIsInputDisabled={setIsInputDisabled}
          setIsPopupVisible={setIsPopupVisible}
          className={styles.popup}
        />
      )}
    </InputGroup>
  )
}

export default TaskItem