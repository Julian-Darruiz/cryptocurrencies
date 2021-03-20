import React, { useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCoin = (label, initialState, coins) => {
  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={handleChange} value={state}>
        <option value="">--Select--</option>
        {coins.map((coin) => (
          <option key={coin.code} value={coin.code}>
            {coin.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCoin, setState];
};

export default useCoin;
