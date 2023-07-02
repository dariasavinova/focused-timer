import React from 'react'

import styles from './Popup.module.scss'

import Title from '@/components/Title/Title.tsx'
import CloseSvg from '@/assets/svgComponents/CloseSvg/CloseSvg.tsx'

interface PopupProps {
  title: string
  onClose: () => void
  children: React.ReactNode
}

const Popup: React.FC<PopupProps> = ({ title, onClose, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
        <div className={styles.popup__header}>
          <Title className={styles.popup__title} level={3}>{title}</Title>
          <CloseSvg className={styles.popup__close} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Popup