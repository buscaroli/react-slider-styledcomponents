import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import { picsData } from '../data/picsData'

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  width: auto;

  margin-top: 80px;
`

const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

function Hero() {
  return (
    <>
      <HeroSection>
        <HeroWrapper>
          <Slider pics={picsData} />
        </HeroWrapper>
      </HeroSection>
    </>
  )
}

export default Hero
