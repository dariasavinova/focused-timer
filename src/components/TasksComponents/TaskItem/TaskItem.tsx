import React, { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { useClickAway } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router-dom'

import styles from './TaskItem.module.scss'

import InputGroup from '@/components/InputGroup/InputGroup.tsx'
import TextInput from '@/components/TextInput/TextInput.tsx'
import TaskItemDropdown from '@/components/TasksComponents/TaskItemDropdown/TaskItemDropdown.tsx'
import DotsSvg from '@/assets/svgComponents/DotsSvg/DotsSvg.tsx'
import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { editCurrentTask } from '@/store/slices/taskSlice.ts'

interface TaskItemProps {
  taskId: number
  taskName: string
}

type EventComposedPath = MouseEvent & {
  composedPath(): Node[]
}

const TaskItem: React.FC<TaskItemProps> = ({ taskId, taskName }) => {
  const dispatch = useAppDispatch()
  const [isInputDisabled, setIsInputDisabled] = useState(true)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const navigate = useNavigate()

  const textInputRef = useRef<HTMLInputElement>(null)
  const taskDetailsRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useClickAway((e: EventComposedPath) => {
    if (e.composedPath().includes(taskDetailsRef.current!)) return
    setIsDropdownVisible(false)
  })
  const inputGroupRef = useClickAway(() => setIsInputDisabled(true))

  useEffect(() => {
    if (!isInputDisabled && textInputRef.current) {
      textInputRef.current.focus()
    }
  }, [isInputDisabled])

  const handleEditCurrentInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editCurrentTask({ taskId, taskName: (e.target as HTMLInputElement).value }))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') setIsInputDisabled(true)
  }

  return (
    <InputGroup className={styles.wrapper} ref={inputGroupRef}>
      <div className={styles.input__wrapper} onClick={() => navigate(`/timer`)}>
        <TextInput
          ref={textInputRef}
          className={styles.input}
          value={taskName}
          onChange={handleEditCurrentInput}
          disabled={isInputDisabled}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.details}
           onClick={() => setIsDropdownVisible(!isDropdownVisible)}
           ref={taskDetailsRef}>
        <DotsSvg />
      </div>
      {isDropdownVisible && (
        <div ref={dropdownRef}>
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