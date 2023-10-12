'use client'
import React, { useEffect, useState } from 'react'
import Map from './Map'
import useStores from '@/hooks/stores'
import useMap from '@/hooks/map'
import { NaverMap } from '@/models/map'
import Markers from './Markers'

export default function MapSection() {
  const stores = require('../../../public/stores.json')
  const { initializeStores } = useStores()
  const { initializeMap } = useMap()

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map)
  }

  useEffect(() => {
    initializeStores(stores)
  }, [initializeStores, stores])

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  )
}
