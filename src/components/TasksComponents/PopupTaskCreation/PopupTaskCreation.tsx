import React, { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'

import styles from '@/components/Header/Header.module.scss'

import TextInput from '@/components/TextInput/TextInput.tsx'
import Button from '@/components/Button/Button.tsx'
import Popup from '@/components/Popup/Popup.tsx'
import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { createNewTask } from '@/store/slices/taskSlice.ts'
import InputGroup from '@/components/InputGroup/InputGroup.tsx'

interface PopupTaskCreation {
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>
}

const PopupTaskCreation: React.FC<PopupTaskCreation> = ({ setIsPopupVisible }) => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  const handleCreateNewTask = () => {
    if (!inputValue) return
    dispatch(createNewTask(inputValue))
    setIsPopupVisible(false)
  }

  const handleKeydownCreateNewTask = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleCreateNewTask()
    }
  }

  return (
    <Popup title={'Создание новой задачи'} onClose={() => setIsPopupVisible(false)}>
      <InputGroup>
        <TextInput
          className={styles.popup__input}
          placeholder={'Создать новую задачу'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeydownCreateNewTask}
        />
      </InputGroup>
      <Button className={styles.popup__create} onClick={handleCreateNewTask}>Создать</Button>
    </Popup>
  )
}

export default PopupTaskCreation