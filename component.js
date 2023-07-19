import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin: 30px 0 10px;




`; 

const BorderedBoxStyle= styled.div`
  border : 2px solid ;
  width : 450px;
  height: 390px;
  text-align:center;
  text-weight:bold;


  
 `;
 const Bold = styled.p`
 font-weight: bold;
 `;
const Yelp = styled.form`
     margin

`;
const ButtonContainer =styled.div`
display:flex;
justify-content:center;
gap:30px;
`;




const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionAmount, setTransactionAmount] = useState('');

  const handleAddTransaction = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount !== 0) {
      const currentTime = new Date().toLocaleString();
      const newTransaction = {
        amount: amount,
        time: currentTime,
      };
      setTransactions([...transactions, newTransaction]);
      setTransactionAmount('');
    }
  };

  const handleRemoveTransaction = () => {
    const amount = parseFloat(transactionAmount);
    if (!isNaN(amount) && amount !== 0) {
      const currentTime = new Date().toLocaleString();
      const newTransaction = {
        amount: -amount, // Use a negative value to represent a removal
        time: currentTime,
      };
      setTransactions([...transactions, newTransaction]);
      setTransactionAmount('');
    }
  };

  return (
    <Container>
        <BorderedBoxStyle>
        <div><Bold>
      <h2>Balance : 500</h2></Bold>
    
      <div>
        <Yelp>
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
        />
        </Yelp>
        <ButtonContainer>
        <button onClick={handleAddTransaction}>Add</button>
        <button onClick={handleRemoveTransaction}>Remove</button>
        </ButtonContainer>

      </div>
    </div>
<p></p>
<hr></hr>
<h3>TransactionList </h3>
    <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            Amount: {transaction.amount > 0 ? 'Added + ' : 'Removed - '}
            {Math.abs(transaction.amount)}, Time: {transaction.time}
          </li>
        ))}
      </ul>
    
    
    </BorderedBoxStyle>
    
    </Container>
    
    
  );
};

export default TransactionList;


