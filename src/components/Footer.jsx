import styled from 'styled-components'

const Container = styled.div`
  height: 10%;
  background: #111;
  color: lightgray;

  font-family: 'Noto Sans KR', sans-serif;
`
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px){
    flex-direction: column;
    align-items: center;
  }
`
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`
const ListItem = styled.li`
margin-right: 20px;`

const Copyright = styled.span`
margin-top: 1rem;`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>FAQ</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Guide</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Glo &copy; 2021</Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer
