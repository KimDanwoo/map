import { MAP_KEY } from '@/hooks/map'
import { STORE_KEY } from '@/hooks/stores'
import { ImageIcon, NaverMap, Store } from '@/models/map'
import React from 'react'
import useSWR from 'swr'
import Marker from './Marker'
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/currentStore'

const MARKER_HEIGHT = 64
const MARKER_WIDTH = 54
const NUMBER_OF_MARKER = 13
const SCALE = 2 / 3

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE

export default function Markers() {
  const { data: map } = useSWR<NaverMap>(MAP_KEY)
  const { data: stores } = useSWR<Store[]>(STORE_KEY)
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY)

  const { setCurrentStore, clearCurrentStore } = useCurrentStore()

  function generateStoreMarkerIcon(
    markerIndex: number,
    isSelected: boolean
  ): ImageIcon {
    return {
      url: isSelected ? '/markers-selected.png' : '/markers.png',
      size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
      origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
      scaledSize: new naver.maps.Size(
        SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
        SCALED_MARKER_HEIGHT
      ),
    }
  }

  if (!map || !stores) return null
  
  return (
    <>
      {stores.map((store) => (
        <Marker
          map={map}
          coordinates={store.coordinates}
          icon={generateStoreMarkerIcon(store.season, false)}
          key={store.nid}
          onClick={() => {
            setCurrentStore(store)
          }}
        />
      ))}
      {currentStore && (
        <Marker
          map={map}
          coordinates={currentStore.coordinates}
          icon={generateStoreMarkerIcon(currentStore.season, true)}
          onClick={clearCurrentStore}
          key={currentStore.nid}
        />
      )}
    </>
  )
}
