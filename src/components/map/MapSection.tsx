'use client'
import React, { useCallback, useEffect } from 'react'
import Map from './Map'
import useStores from '@/hooks/stores'
import useMap from '@/hooks/map'
import { NaverMap, Store } from '@/models/map'
import Markers from './Markers'
import useCurrentStore from '@/hooks/currentStore'
import Header from '../common/Header'
import copy from 'copy-to-clipboard'
import Button from '../common/Button'
import PlaceToolbar from '../place/PlaceToolbar'
import { useRouter } from 'next/navigation'

type Props = {
  stores: Store[]
}

export default function MapSection({ stores }: Props) {
  const { initializeStores } = useStores()
  const { initializeMap } = useMap()
  const { clearCurrentStore } = useCurrentStore()

  const { resetMapOptions, getMapOptions } = useMap()
  const router = useRouter()
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions()
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`
    router.push(query)
    copy(location.origin + query)
  }, [router, getMapOptions])

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map)
    naver.maps.Event.addListener(map, 'click', clearCurrentStore)
  }

  useEffect(() => {
    initializeStores(stores)
  }, [initializeStores, stores])

  return (
    <>
      <Header
        onClickLogo={resetMapOptions}
        rightElements={
          <div className="flex">
            <Button title="공유하기" onClickButton={replaceAndCopyUrl} />
            <Button title="피드백" onClickButton={() => {}} />
          </div>
        }
      />
      <Map onLoad={onLoadMap} />
      <Markers />
      <PlaceToolbar />
    </>
  )
}
