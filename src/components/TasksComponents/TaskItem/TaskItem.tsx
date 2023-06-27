import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

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

  const handleEditCurrentInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editCurrentTask({ taskId, taskName: (e.target as HTMLInputElement).value }))
    // TODO: use lodash for optimisation
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') setIsInputDisabled(true)
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
        onChange={handleEditCurrentInput}
        disabled={isInputDisabled}
        onKeyDown={handleKeyDown}
      />
      <div className={styles.details} onClick={() => setIsPopupVisible(!isPopupVisible)}>...</div>
      {isPopupVisible && (
        <TaskItemPopup
          setIsInputDisabled={setIsInputDisabled}
          setIsPopupVisible={setIsPopupVisible}
          taskId={taskId}
          className={styles.popup}
        />
      )}
    </InputGroup>
  )
}

export default TaskItem