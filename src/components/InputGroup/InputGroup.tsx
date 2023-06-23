import React from 'react'

import styles from './InputGroup.module.scss'
import classNames from 'classnames'

interface InputGroupProps {
  className?: string
  children: React.ReactNode
}

const InputGroup: React.FC<InputGroupProps> = ({ className, children }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {children}
    </div>
  )
}

export default InputGroup