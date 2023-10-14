import React from 'react'

type Props = {
  onClickButton?: () => void
  title: string
}
export default function Button({ onClickButton, title }: Props) {
  return (
    <button
      className="px-3 mx-2 py-1 bg-green-400  p-2 rounded-md hover:bg-green-500"
      onClick={onClickButton}
    >
      {title}
    </button>
  )
}
