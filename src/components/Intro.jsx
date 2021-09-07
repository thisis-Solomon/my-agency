import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'

import woman from './img/woman.png'

const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`

/* 
font-family: 'Kaisei Opti', serif;

font-family: 'Noto Sans KR', sans-serif;
*/

const Title = styled.h1`
  font-family: 'Kaisei Opti', serif;
  width: 80%;
  font-size: 5rem;
  line-height: 116%;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 3rem;
  }
`

const Description = styled.p`
  font-family: 'Noto Sans KR', sans-serif;
  width: 80%;
  font-size: 20px;
  padding-top: 20px;
  line-height: 1.6;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-weight: 400;
  }
`

const Information = styled.div`
  width: 80%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  padding: 20px;
  font-weight: 500;
  border: none;
  border-radius: 0.3rem;
  letter-spacing: 3px;
  cursor: pointer;
  border: 2px solid orange;

  font-family: 'Noto Sans KR', sans-serif;

  &:hover {
    background: #ffa500;
    color: white;
    transition: all 0.3s ease-in-out;
  }
`

const Contact = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
    background: #ffffffd1;
    padding: 5px;
    border: 2px solid #ffa600b5;
    border-radius: 0.3rem;
  }
`
const Phone = styled.span`
  color: #b37400;
`

const ContactText = styled.span`
  color: #242424a6;
  margin-top: 5px;
`

const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 480px) {
    /* position: relative; */
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom center;

  @media only screen and (max-width: 480px) {
    position: absolute;
    bottom: 0;
    right: 0%;
    width: 100%;
    height: 100%;
    object-position: top center;
    opacity: 0.5;
    z-index: -2;
  }
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Description>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Description>
        <Information>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us on (+260) 954 041 088</Phone>
            <ContactText>For any questions or concern</ContactText>
          </Contact>
        </Information>
      </Left>
      <Right>
        <Image src={woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  )
}
export default Intro
