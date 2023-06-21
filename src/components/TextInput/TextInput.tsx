import React from 'react'
import classNames from 'classnames'

import styles from './TextInput.module.scss'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const TextInput: React.FC<TextInputProps> = ({ className }) => {
  return (
    <input className={classNames(styles.input, className)} />
  )
}

export default TextInput