import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

import styles from './TaskItem.module.scss'

import InputGroup from '@/components/InputGroup/InputGroup.tsx'
import TextInput from '@/components/TextInput/TextInput.tsx'
import TaskItemDropdown from '@/components/TasksComponents/TaskItemDropdown/TaskItemDropdown.tsx'
import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { editCurrentTask } from '@/store/slices/taskSlice.ts'

interface TaskItemProps {
  taskId: string
  taskName: string
}

const TaskItem: React.FC<TaskItemProps> = ({ taskId, taskName }) => {
  const dispatch = useAppDispatch()
  const [isInputDisabled, setIsInputDisabled] = useState(true)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const textInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const taskDetailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isInputDisabled && textInputRef.current) {
      textInputRef.current.focus()
    }
  }, [isInputDisabled])

  useEffect(() => {
    const handleClickOutsideDropdown = (e: any) => {
      if (![taskDetailsRef.current, dropdownRef.current].some(element => e.composedPath().includes(element))) {
        setIsDropdownVisible(false)
      }
    }
    document.body.addEventListener('click', handleClickOutsideDropdown)

    return () => document.body.removeEventListener('click', handleClickOutsideDropdown)
  })

  const handleEditCurrentInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editCurrentTask({ taskId, taskName: (e.target as HTMLInputElement).value }))
    // TODO: use lodash for optimisation
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') setIsInputDisabled(true)
  }

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
      <div className={styles.details}
           onClick={() => setIsDropdownVisible(!isDropdownVisible)}
           ref={taskDetailsRef}>
        ...
      </div>
      {isDropdownVisible && (
        <div className="task__dropdown" ref={dropdownRef}>
          <TaskItemDropdown
            setIsInputDisabled={setIsInputDisabled}
            setIsDropdownVisible={setIsDropdownVisible}
            taskId={taskId}
            className={styles.dropdown}
          />
        </div>
      )}
    </InputGroup>
  )
}

export default TaskItem