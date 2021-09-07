import styled, { css, keyframes } from 'styled-components'

const squire = keyframes` 
    to {
      transform: translate(100vw, 100vh);
    }
`
const circle = keyframes`
    to {
      transform: translate(100vw, -100vh);
    }
`
const rectangle = keyframes`
    to {
      transform: translate(-100vw, -100vh);
    }
`
const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: ${squire} 25s linear alternate infinite;
`
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: orange;
  opacity: 0.7;
  position: absolute;
  top: 100%;
  bottom: 0px;
  z-index: -1;
  animation: ${circle} 25s linear alternate infinite;
`
const Rectangle = styled.div`
  width: 60px;
  height: 100px;
  background-color: orange;
  opacity: 0.4;
  position: absolute;
  bottom: -50px;
  right: 0;
  z-index: -1;
  animation: ${rectangle} 25s linear alternate infinite;
`

const AnimatedShapes = () => {
  return (
    <>
      <Circle />
      <Rectangle />
      <Square />
    </>
  )
}

export default AnimatedShapes
