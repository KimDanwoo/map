'use client'
import { useEffect } from 'react'
import { Marker } from '@/models/map'

export default function Marker({ map, coordinates, icon, onClick }: Marker) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      })
    }
    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick)
      return () => {
        marker?.setMap(null)
      }
    }
  }, [map, coordinates, onClick, icon])
  return null
}
