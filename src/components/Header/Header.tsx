import React from 'react'

import styles from './Header.module.scss'
import logo from '@/assets/logo.svg'

import Title from '@/components/Title/Title.tsx'
import MenuSvg from '@/assets/svgComponents/MenuSvg/MenuSvg.tsx'
import PlusSvg from '@/assets/svgComponents/PlusSvg/PlusSvg.tsx'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={'/'}>
        <div className={styles.logo}>
          <img className={styles.logo__image} src={logo} alt="Логотип" />
          <Title className={styles.title} level={3}>Focused Timer</Title>
        </div>
      </Link>
      <div className={styles.buttons}>
        <PlusSvg className={styles.buttons__item} background={'#ffffff'} color={'#15293E'} />
        <MenuSvg className={styles.buttons__item} background={'#ffffff'} color={'#15293E'} />
      </div>
    </div>
  )
}

export default Header