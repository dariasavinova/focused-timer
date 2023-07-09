import React from 'react'

import styles from '../styles/Svg.module.scss'

interface PlusSvgProps {
  background: string
  color: string
  onClick: () => void
  className?: string
}

const PlusSvg: React.FC<PlusSvgProps> = ({ background, color, onClick, className }) => (
  <div className={styles.wrapper} onClick={onClick}>
    <svg
      className={className}
      width="40px"
      height="40px"
      viewBox="-7.68 -7.68 39.36 39.36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#15293E"
      strokeWidth="0.00024000000000000003">
      <g className={styles.svg_background} id="SVGRepo_bgCarrier" strokeWidth="0" fill={background}>
        <rect x="-7.68" y="-7.68" width="39.36" height="39.36" rx="19.68" strokeWidth="0" />
      </g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          className={styles.svg_color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
          fill={color} />
      </g>
    </svg>
  </div>
)

export default PlusSvg