import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './NewTaskCreation.module.scss'

import MinimalPlusSvg from '@/assets/svgComponents/MinimalPlusSvg/MinimalPlusSvg.tsx'
import InputGroup from '@/components/InputGroup/InputGroup.tsx'
import TextInput from '@/components/TextInput/TextInput.tsx'
import Button from '@/components/Button/Button.tsx'
import { useAppDispatch } from '@/hooks/storeDefaultHooks.ts'
import { createNewTask } from '@/store/slices/taskSlice.ts'

interface NewTaskCreationProps {
  className?: string
}

const NewTaskCreation: React.FC<NewTaskCreationProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')
  const [hoveredButton, setHoveredButton] = useState(false)

  const handleCreateNewTask = () => {
    if (!inputValue) return
    dispatch(createNewTask(inputValue))
    setInputValue('')
  }

  return (
    <div className={classNames(styles.wrapper, className)}>
      <InputGroup>
        <TextInput
          className={styles.input}
          placeholder={'Создать новую задачу'}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.code === 'Enter' && handleCreateNewTask()}
        />
        <Button
          className={styles.button}
          onClick={handleCreateNewTask}
          onMouseEnter={() => setHoveredButton(true)}
          onMouseLeave={() => setHoveredButton(false)}
        >
          <MinimalPlusSvg color={hoveredButton ? '#fff' : '#222937'} />
        </Button>
      </InputGroup>
    </div>
  )
}

export default NewTaskCreation