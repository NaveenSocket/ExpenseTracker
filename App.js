import styled from"styled-components";




import TransactionList from "./component";


function App() {
  const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  margin: 30px 0 10px;
  

  `; 
  const Header = styled.header`
  color: black ;
  font-size: 20px; 
  font-weight: bold;
  `;
  return<Container>
      <Header>Expense Tracker - Basic</Header>
      
      <TransactionList/>
     
    </Container>
  
}

export default App;
