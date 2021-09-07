import styled, { css } from 'styled-components'
import Contact from './components/Contact';
import Features from './components/Features'
import Footer from './components/Footer';
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import Services from './components/Services'

const Container = styled.div`
  /* height: 100vh; */
  position: relative;
  overflow: hidden;
`

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const IntroShape = styled.div`
  ${Shape}
  background-color: #f28705;
  clip-path: polygon(100% 0%, 50% 0%, 60% 100%, 100% 100%);
`

const FeatureShape = styled.div`
  ${Shape}
  background-color: #f28705;
  clip-path: polygon(0% 100%, 0% 0%, 60% 0%, 40% 100%);
`
const ServiceShape = styled.div`
  ${Shape}
  background-color: #f28705;
  clip-path: polygon(0% 100%, 0% 0%, 40% 0%, 40% 100%);
`
const PricingShape = styled.div`
  ${Shape}
  background-color: #a75c68;
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 67% 100%);
`

function App () {
  return (
    <>
      <Container>
        <NavBar />
        <Intro />
        <IntroShape />
      </Container>

      <Container>
        <Features />
        <FeatureShape />
      </Container>

      <Container>
        <Services />
        <ServiceShape />
      </Container>

      <Container>
        <Pricing />
        <PricingShape />
      </Container>
      
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default App
