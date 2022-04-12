import React from 'react'
import styled from 'styled-components'

const ImgWrapper = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
  object-position: 50% 100%;
  height: 100%;
`

const TextWrapper = styled.p`
  position: absolute;
  bottom: 0px;
  color: lightgrey;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-left: 40%;
  font-weight: 300;
  text-align: center;
  border-radius: 20px;
  text-shadow: 2px 2px 3px black;
`

function ImagePic({ pic }) {
  return (
    <>
      <ImgWrapper src={pic.image} alt={pic.alt} />
      <TextWrapper>by {pic.author}</TextWrapper>
    </>
  )
}

export default ImagePic
