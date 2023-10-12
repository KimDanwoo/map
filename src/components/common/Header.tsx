'use client'
import useMap from '@/hooks/map'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import copy from 'copy-to-clipboard'

export default function Header() {
  const { resetMapOptions, getMapOptions } = useMap()
  const router = useRouter()
  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions()
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`
    router.replace(query)
    copy(location.origin + query)
  }, [router, getMapOptions])
  return <>Header</>
}
