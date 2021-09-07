import styled from 'styled-components'

const Card = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  

  padding: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.58);
  border-radius: 0.4rem;
  background: white;

  @media only screen and (max-width: 480px){
    margin-left: 0;
    margin-bottom: 10px;
    
    &:first-child {margin-top: 2rem}
  }

`
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;

  @media only screen and (max-width: 480px){
    font-size: 30px;
  }
`
const Type = styled.button`
  padding: 20px;
  border-radius: 4rem;
  font-size: 20px;
  background: transparent;
  margin: 10px 0;
  border: 2px solid #a75c68;

  @media only screen and (max-width: 480px){
    width: 80%;
    padding: 10px;
  }
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  margin: 30px 0;

  @media only screen and (max-width: 480px){
    margin: 15px 0;
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
  margin: 30px 0;
  cursor: pointer;
  font-weight: bold;

  &:hover{
  background: #814650;
  }

  @media only screen and (max-width: 480px){
    margin: 10px 0;
  }
`

const PriceCard = ({ price, type }) => {
  return (
    <Card>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button>Join Now</Button>
    </Card>
  )
}

export default PriceCard
