import styled from 'styled-components'
import PriceCard from './PriceCard'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 480px){
    flex-direction: column;
  }
`

const Pricing = () => {
  return (
    <Container>
      <PriceCard price='10' type='Basic' />
      <PriceCard price='20' type='Premium' />
      <PriceCard price='50' type='Advinced' />
    </Container>
  )
}

export default Pricing
