import React, { Dispatch, KeyboardEvent, SetStateAction, useEffect, useRef, useState } from 'react'

import styles from '@/components/Header/Header.module.scss'

import TextInput from '@/components/TextInput/TextInput.tsx'
import Button from '@/components/Button/Button.tsx'
import Popup from '@/components/Popup/Popup.tsx'
import InputGroup from '@/components/InputGroup/InputGroup.tsx'
import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { createNewTask } from '@/store/slices/taskSlice.ts'

interface PopupTaskCreation {
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>
}

const PopupTaskCreation: React.FC<PopupTaskCreation> = ({ setIsPopupVisible }) => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <Popup title={'Создание новой задачи'} onClose={() => setIsPopupVisible(false)}>
      <InputGroup>
        <TextInput
          className={styles.popup__input}
          ref={inputRef}
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