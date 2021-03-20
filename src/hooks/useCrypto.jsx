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

const useCrypto = (label, initialState, cryptos) => {

  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const SelectCrypto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={handleChange} value={state}>
        <option value="">--Select--</option>
        {cryptos.map((crypto) => (
          <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCrypto, setState];
};

export default useCrypto;
