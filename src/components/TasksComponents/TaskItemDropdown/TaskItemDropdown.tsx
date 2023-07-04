import React, { Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'

import styles from './TaskItemDropdown.module.scss'

import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { deleteCurrentTask } from '@/store/slices/taskSlice.ts'

interface TaskItemDropdownProps {
  setIsInputDisabled: Dispatch<SetStateAction<boolean>>
  setIsDropdownVisible: Dispatch<SetStateAction<boolean>>
  taskId: number
  className?: string
}

const TaskItemDropdown: React.FC<TaskItemDropdownProps> = (props) => {
  const { setIsInputDisabled, setIsDropdownVisible, taskId, className } = props
  const dispatch = useAppDispatch()

  const handleClickEditTask = () => {
    setIsInputDisabled(false)
    setIsDropdownVisible(false)
  }

  return (
    <ul className={classNames(styles.wrapper, className)}>
      <li className={styles.wrapper__item} onClick={handleClickEditTask}>
        Редактировать
      </li>
      <li className={styles.wrapper__item} onClick={() => dispatch(deleteCurrentTask(taskId))}>
        Удалить
      </li>
    </ul>
  )
}

export default TaskItemDropdown