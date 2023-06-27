import React, { Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'

import styles from './TaskItemPopup.module.scss'

import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { deleteCurrentTask } from '@/store/slices/taskSlice.ts'

interface TaskItemPopupProps {
  setIsInputDisabled: Dispatch<SetStateAction<boolean>>
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>
  taskId: string
  className?: string
}

const TaskItemPopup: React.FC<TaskItemPopupProps> = ({ setIsInputDisabled, setIsPopupVisible, taskId, className }) => {
  const dispatch = useAppDispatch()

  const handleClickEditTask = () => {
    setIsInputDisabled(false)
    setIsPopupVisible(false)
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

export default TaskItemPopup