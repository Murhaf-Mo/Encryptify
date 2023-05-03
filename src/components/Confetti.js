import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Confettii(){
    const { width, height } = useWindowSize()
    return (
        <Confetti
            recycle={false}
            width={width}
            height={height}
        />
    )
}