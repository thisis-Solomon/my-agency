import styled from 'styled-components'

import send from './img/send.png'
import phone from './img/phone.png'

const Container = styled.div`
  height: 100%;
`
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Noto Sans KR', sans-serif;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 95%;
    text-align: center;
  }
`
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Input = styled.input`
  width: 300px;
  padding: 20px;
  margin-right: 30px;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`
const TextArea = styled.textarea`
  width: 300px;
  height: 100%;
  padding: 10px;

  @media only screen and (max-width: 480px){
    height: 15vh;
  }
`

const Button = styled.button`
  padding: 15px 55px;
  border-radius: 0.5rem;
  outline: none;
  border: 2px solid;
  background: #a75c68;
  color: white;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #814650;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px 30px;
  }
`
const Title = styled.h1`
  margin-bottom: 50px;
  margin-left: 10x;

  @media only screen and (max-width: 480px) {
    margin: 0;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 90%;
    margin-top: 4rem;
  }
`

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 30px;
  }
`

const Icon = styled.img`
  width: 20px;

  @media only screen and (max-width: 480px) {
    width: 40px;
    margin-bottom: 4px;
  }
`
const Text = styled.span`
  font-size: 20px;
  margin-left: 15px;
`

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> Let's get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder='Name' />
              <Input placeholder='Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='Message' />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={phone} alt='map' />
            <Text>(+260) 954 041 088</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={send} alt='map' />
            <Text>glo.info@gmail.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact
