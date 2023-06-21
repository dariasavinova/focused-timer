import React from 'react'

import styles from './Title.module.scss'
import classNames from 'classnames'

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ level = 2, className, children }) => {
  const TitleTag = `h${level}` as React.ElementType

  return (
    <TitleTag className={classNames(styles[`title_${level}`], className)}>{children}</TitleTag>
  )
}

export default Title