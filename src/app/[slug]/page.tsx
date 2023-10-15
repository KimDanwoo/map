import React from 'react'

type Props = {
  params: {
    slug: string
  }
}
export default function PlaceDetailPage({ params: { slug } }: Props) {
  const stores = require('../../../public/stores.json')
  const store = stores.find(({ name }: { name: string }) => name === slug)
  console.log(store)
  return <div>{slug}</div>
}
