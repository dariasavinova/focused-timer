import React, { forwardRef } from 'react'
import classNames from 'classnames'

import styles from './InputGroup.module.scss'

interface InputGroupProps {
  className?: string
  children: React.ReactNode
}

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
  const { className, children } = props

  return (
    <div className={classNames(styles.wrapper, className)} ref={ref}>
      {children}
    </div>
  )
})

export default InputGroup