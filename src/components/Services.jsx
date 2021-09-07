import { useState } from 'react'
import styled from 'styled-components'

import how from './img/how.png'
import play from './img/play.png'
import MiniCard from './MiniCard'

import web_dev from './img/web_design.png'
import seo from './img/seo-icon.png'

const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    /* margin: auto; */
  }
`

const Left = styled.div`
  width: 50%;
  position: relative;
`

const Image = styled.img`
  display: ${props => props.isPlaying && 'none'};
  height: 100%;
  object-fit: cover;
  object-position: bottom center;
  margin-left: 100px;
  margin-bottom: 60px;

  @media only screen and (max-width: 480px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Video = styled.video`
  display: ${props => !props.isPlaying && 'none'};
  height: 300px;
  border-radius: 0.4rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  @media only screen and (max-width: 480px) {
    display: ${props => props.smallSize && 'none'};
    width: 100%;
    padding: 6px;
  }
`

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 15px;
    width: 100%;
  }
`

/*

font-family: 'Kaisei Opti', serif;

font-family: 'Noto Sans KR', sans-serif;

*/

const Title = styled.h1`
  font-family: 'Kaisei Opti', serif;
  font-size: 5rem;
  line-height: 116%;
  font-weight: 500;

  @media only screen and (max-width: 480px) {
    font-size: 3rem;
  }
`
const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #1b1717;
  margin-top: 2rem;
  font-family: 'Noto Sans KR', sans-serif;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  @media only screen and (max-width: 480px) {
    margin-top: 1.5rem;
  }
`

const Button = styled.button`
  margin-top: 50px;
  width: 40%;
  font-size: 20px;
  padding: 15px 20px;
  border: 2px solid #e48998;
  border-radius: 0.3rem;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  align-items: center;

  &:hover {
    background: #e48998;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 1.5rem;
    padding: 10px 15px;
    width: 100%;
    border: 2px solid #3333338f;
  }
`

const Play = styled.img`
  width: 30px;
  margin-right: 10px;
`

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, #0000008b, #00000036);
  position: absolute;
  top: 0;
  left: 0;
`

const Cancel = styled.button`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background: linear-gradient(to left, #dc143cda, #dc143c73);
  border-radius: 50%;
  position: absolute;
  right: 0;
`

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const smallSize = window.screen.width <= 480 ? true : false
  return (
    <Container>
      <Left>
        <Image isPlaying={isPlaying} src={how} />
        <Video
          isPlaying={isPlaying}
          smallSize={smallSize}
          src='https://www.istockphoto.com/video/focus-on-what-will-drive-your-business-further-gm1073509508-287362901'
          type='video/webm'
          autoPlay
          loop
          controls
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Description>
            We provide digital exprience services to startups and small
            businesses to looking for a partner of their digital media, design
            and development, lead generation and communications requirements. We
            work with you, not for you. Although we have a great resouces
          </Description>

          <CardContainer>
            <MiniCard
              text='exclussive and simple design worked in partnership with the client and the glo team which bring satisfaction to both parties.'
              icon={web_dev}
            />
            <MiniCard
              text='indexing your website on the three search result in results on google.'
              icon={seo}
            />
          </CardContainer>
          <Button onClick={() => setIsPlaying(true)}>
            <Play src={play} />
            How it works
          </Button>
        </Wrapper>
      </Right>

      {smallSize && isPlaying && (
        <Modal>
          <Cancel onClick={() => setIsPlaying(false)}>&times;</Cancel>
          <Video
            isPlaying={isPlaying}
            src='https://www.instagram.com/reel/CS351UElDX0/?utm_source=ig_web_button_share_sheet'
            autoPlay
            loop
            controls
          />
        </Modal>
      )}
    </Container>
  )
}

export default Services
