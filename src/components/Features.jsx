import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'

import app from './img/app.png'

const Container = styled.div`
  height: 100%;
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  width: 50%;
`

const Image = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  object-position: bottom center;

  @media only screen and (max-width: 480px) {
    position: absolute;
    left: 40%;
    top: 0;
    opacity: 0.5;
    z-index: -1;
  }
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: auto 1rem;
  }
`

const Title = styled.span`
  font-family: 'Kaisei Opti', serif;
  font-weight: 500;
  line-height: 116%;
  font-size: 5rem;

  @media only screen and (max-width: 480px) {
    font-size: 3rem;
    margin-top: 1rem;
  }
`
const SubTitle = styled.span`
  font-size: 24px;
  color: #1a1717;
  margin-top: 2rem;
  font-weight: bold;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;

  position: relative;

  &::before {
    content: '';
    height: 0.3rem;
    width: 60%;
    background: rgba(255, 166, 0, 0.7);
    position: absolute;
    bottom: 0%;
    left: 10%;
    right: 40%;
    margin: auto;
    border-radius: 0.3rem;
  }

  @media only screen and (max-width: 480px) {
    text-align: center;

    &::after {
      content: '';
      height: 0.3rem;
      width: 40%;
      background: rgba(255, 166, 0, 0.5);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 0.3rem;
    }

    &::before {
      content: '';
      height: 0.3rem;
      width: 60%;
      background: rgba(255, 166, 0, 0.5);
      position: absolute;
      bottom: 50%;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 0.3rem;
    }
  }
`
const Description = styled.p`
  font-size: 20px;
  width: 90%;
  color: #161414;
  margin-top: 2rem;

  font-family: 'Noto Sans KR', sans-serif;

  @media only screen and (max-width: 480px) {
    margin-top: 1rem;
  }
`
const Button = styled.button`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  width: 30%;
  border: 2px solid pink;
  margin-top: 2rem;
  border-radius: 0.3rem;
  padding: 15px 20px;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    background: pink;
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin-bottom: 2rem;
  }
`

const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={app} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Description>
          We help our client succeed by creating brand identities, digital
          expriences, and print materials that communicate clearly, achieve,
          marketing goals, and looks fantastic
        </Description>
        <Description>
          We care your business and guarantee you to achieve marketing goals.
        </Description>

        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Features
