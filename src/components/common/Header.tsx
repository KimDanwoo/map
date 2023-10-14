import React from 'react'
import MainLogo from './MainLogo'

type Props = {
  onClickLogo?: () => void
  rightElements?: React.ReactElement
}

export default function Header({ onClickLogo, rightElements }: Props) {
  return (
    <header className="flex justify-between p-2 bg-none fixed z-10 w-full">
      <MainLogo onClickLogo={onClickLogo} />
      {rightElements}
    </header>
  )
}
