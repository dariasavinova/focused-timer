import React from 'react'

import styles from '../styles/Svg.module.scss'

interface MinimalPlusSvgProps {
  color: string
  className?: string
}

const MinimalPlusSvg: React.FC<MinimalPlusSvgProps> = ({ color, className }) => (
  <div className={styles.wrapper}>
    <svg
      className={className}
      width="20px"
      height="20px"
      viewBox="0 0 20.00 20.00"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="0.2">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          className={styles.svg_color}
          fill={color}
          fillRule="evenodd"
          d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z" />
      </g>
    </svg>
  </div>
)

export default MinimalPlusSvg