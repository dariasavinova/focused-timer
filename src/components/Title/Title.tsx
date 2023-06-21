import React from 'react'

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ level = 2, children }) => {
  const TitleTag = `h${level}` as React.ElementType

  return (
    <TitleTag>{children}</TitleTag>
  )
}

export default Title