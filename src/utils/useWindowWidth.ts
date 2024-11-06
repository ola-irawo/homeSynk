"use client"
import { useEffect, useState } from 'react'

const useWindowWidth = ():number => {
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

    useEffect(() => {
        const handleWindonResize = () => {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleWindonResize)
        return () => window.removeEventListener("resize", handleWindonResize)

    }, [windowWidth])
  return windowWidth
}

export default useWindowWidth
