import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;

  -webkit-box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.58);
  border-radius: 0.4rem;

  @media only screen and (max-width: 480px) {
    padding: 8px;
  }
`
const Image = styled.img`
  width: 50px;
`

const Text = styled.span`
  margin-top: 10px;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`

const MiniCard = ({ icon, text }) => {
  return (
    <Container>
      <Image src={icon} />
      <Text>{text}</Text>
    </Container>
  )
}

export default MiniCard
