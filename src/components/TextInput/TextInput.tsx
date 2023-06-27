import React, { forwardRef } from 'react'
import classNames from 'classnames'

import styles from './TextInput.module.scss'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { className, ...rest } = props
  return (
    <input className={classNames(styles.input, className)} {...rest} ref={ref} />
  )
})

export default TextInput