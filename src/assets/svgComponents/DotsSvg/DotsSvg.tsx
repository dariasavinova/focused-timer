import React from 'react'

import styles from '../styles/Svg.module.scss'

interface DotsSvgProps {
  color: string
  className?: string
}

const DotsSvg: React.FC<DotsSvgProps> = ({ color, className }) => (
  <div className={styles.wrapper}>
    <svg
      className={className}
      width="25px"
      height="18px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="none">
      <g fill={color}>
        <rect width="4" height="4" x="3" y="10.5" rx="2" />
        <rect width="4" height="4" x="12" y="10.5" rx="2" />
        <rect width="4" height="4" x="21" y="10.5" rx="2" />
      </g>
    </svg>
  </div>
)


export default DotsSvg