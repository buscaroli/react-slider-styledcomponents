import React from 'react'
import styled from 'styled-components'
import ImagePic from './ImagePic'
import { useEffect, useState, useRef } from 'react'

const SliderWrapper = styled.div`
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

function Slider({ pics }) {
  const [index, setIndex] = useState(0)
  const [currentIdx, setCurrentIdx] = useState(0)
  const length = pics.length
  const timeout = useRef(null)

  useEffect(() => {
    const nextPic = () => {
      setIndex((idx) => (idx >= length - 1 ? 0 : index + 1))
    }
    timeout.current = setTimeout(nextPic, 4000)

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [index, length])

  return (
    <>
      <SliderWrapper>
        <ImagePic pic={pics[index]} />
      </SliderWrapper>
    </>
  )
}

export default Slider
