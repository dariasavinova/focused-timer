import React from 'react'
import classNames from 'classnames'

import styles from './InputGroup.module.scss'

interface InputGroupProps {
  className?: string
  children: React.ReactNode
}

const InputGroup: React.FC<InputGroupProps> = ({ className, children }) => (
  <div className={classNames(styles.wrapper, className)}>
    {children}
  </div>
)

export default InputGroup