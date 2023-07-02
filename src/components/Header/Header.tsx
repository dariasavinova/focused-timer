import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import logo from '@/assets/logo.svg'

import Title from '@/components/Title/Title.tsx'
import MenuSvg from '@/assets/svgComponents/MenuSvg/MenuSvg.tsx'
import PlusSvg from '@/assets/svgComponents/PlusSvg/PlusSvg.tsx'
import Popup from '@/components/Popup/Popup.tsx'
import TextInput from '@/components/TextInput/TextInput.tsx'
import Button from '@/components/Button/Button.tsx'

const Header: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className={styles.wrapper}>
      <Link to={'/'}>
        <div className={styles.logo}>
          <img className={styles.logo__image} src={logo} alt="Логотип" />
          <Title className={styles.title} level={3}>Focused Timer</Title>
        </div>
      </Link>
      <div className={styles.buttons}>
        <PlusSvg
          className={styles.buttons__item}
          background={'#ffffff'}
          color={'#15293E'}
          onClick={() => setIsPopupVisible(true)} />
        <MenuSvg className={styles.buttons__item} background={'#ffffff'} color={'#15293E'} />
      </div>
      {isPopupVisible && (
        <Popup title={'Создание новой задачи'} onClose={() => setIsPopupVisible(false)}>
          <TextInput
            className={styles.popup__input}
            placeholder={'Создать новую задачу'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button className={styles.popup__create}>Создать</Button>
        </Popup>)}
    </div>
  )
}

export default Header