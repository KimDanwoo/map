import Link from 'next/link'
import React from 'react'
type Props = {
  onClickLogo?: () => void
}
export default function MainLogo({ onClickLogo }: Props) {
  return (
    <Link
      href="/"
      onClick={onClickLogo}
      className="bg-green-400 flex items-center px-3 cursor-pointer hover:bg-green-500 rounded-md"
    >
      N
    </Link>
  )
}
