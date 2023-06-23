import React, { Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'

import styles from './TaskItemPopup.module.scss'

interface TaskItemPopupProps {
  setIsInputDisabled: Dispatch<SetStateAction<boolean>>
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>
  className?: string
}

const TaskItemPopup: React.FC<TaskItemPopupProps> = ({ setIsInputDisabled, setIsPopupVisible, className }) => {
  const handleClickEditTask = () => {
    setIsInputDisabled(false)
    setIsPopupVisible(false)
  }

  return (
    <ul className={classNames(styles.wrapper, className)}>
      <li className={styles.item} onClick={handleClickEditTask}>
        Редактировать
      </li>
      <li className={styles.item}>Удалить</li>
    </ul>
  )
}

export default TaskItemPopup