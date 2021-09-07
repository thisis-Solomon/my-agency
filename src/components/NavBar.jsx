import styled from 'styled-components'

const Container = styled.div`
  height: 70px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.h1`
  font-family: 'Kaisei Opti', serif;
  font-weight: 700;
  font-size: 45px;
`

const Menu = styled.ul`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  display: flex;
  font-size: 1.4rem;
  color: #131212;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`
const MenuItem = styled.li`
  list-style: none;
  margin-left: 2rem;
`

const Button = styled.button`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  border: 2px solid;
  padding: 10px 35px;
  border-radius: 0.5rem;
  font-weight: bold;
  background: transparent;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    padding: 10px 20px;
  }
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Glo.</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contacts</MenuItem>
          </Menu>
        </Left>
        <Button>Join Us</Button>
      </Wrapper>
    </Container>
  )
}

export default NavBar
