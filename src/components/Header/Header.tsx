import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './Header.module.scss'
import logo from '@/assets/logo.svg'

import Title from '@/components/Title/Title.tsx'
import MenuSvg from '@/assets/svgComponents/MenuSvg/MenuSvg.tsx'
import PlusSvg from '@/assets/svgComponents/PlusSvg/PlusSvg.tsx'
import PopupTaskCreation from '@/components/TasksComponents/PopupTaskCreation/PopupTaskCreation.tsx'

const Header: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Link to={'/'}>
        <div className={styles.logo}>
          <img className={styles.logo__image} src={logo} alt="Логотип" />
          <Title className={styles.title} level={3}>Focused Timer</Title>
        </div>
      </Link>
      <ul className={styles.links}>
        <li><NavLink to={'/'} className={styles.links__item}>Задачи</NavLink></li>
        <li><NavLink to={'/timer'} className={styles.links__item}>Таймер</NavLink></li>
      </ul>
      <div className={styles.buttons}>
        <PlusSvg
          className={styles.buttons__item}
          background={'#ffffff'}
          color={'#15293E'}
          onClick={() => setIsPopupVisible(true)} />
        <MenuSvg className={styles.buttons__item} background={'#ffffff'} color={'#15293E'} />
      </div>
      {isPopupVisible && <PopupTaskCreation setIsPopupVisible={setIsPopupVisible} />}
    </div>
  )
}

export default Header