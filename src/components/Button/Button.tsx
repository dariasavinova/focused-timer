import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={classNames(styles.button, className)} {...rest}>{children}</button>
  )
}

export default Button