import React from 'react'

import styles from '../styles/Svg.module.scss'

interface MenuSvgProps {
  background: string
  color: string
  className?: string
}

const MenuSvg: React.FC<MenuSvgProps> = ({ background, color, className }) => (
  <div className={styles.wrapper}>
    <svg
      className={className}
      width="40px"
      height="40px"
      viewBox="-7.68 -7.68 39.36 39.36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
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
          d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM5 17C5 16.4477 5.44772 16 6 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17Z"
          fill={color}
        />
      </g>
    </svg>
  </div>
)

export default MenuSvg