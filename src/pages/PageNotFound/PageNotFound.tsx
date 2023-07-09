import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PageNotFound.module.scss'
import notFoundImage from '@/assets/404.png'

import Title from '@/components/Title/Title.tsx'
import Button from '@/components/Button/Button.tsx'

const PageNotFound: React.FC = () => (
  <div className={styles.wrapper}>
    <img className={styles.image} src={notFoundImage} alt="404" />
    <Title level={2}>Кажется, такой страницы не существует...</Title>
    <Link to={'/'}><Button className={styles.button}>Перейти на главную</Button></Link>
  </div>
)


export default PageNotFound