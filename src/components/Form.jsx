import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';
import Error from './Error';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Form = ({setCoin, setCrypto}) => {

    const [cryptoList, setCryptoList] = useState([]);
    const [error, setError] = useState(false);

    const COINS = [
        {code: 'USD', name:'Dollars'},
        {code: 'EUR', name:'Euros'},
        {code: 'GBP', name:'Libras'}
    ]
    const [coin, SelectCoin] = useCoin('Choose your coin', '', COINS);
    const [crypto, SelectCrypto] = useCrypto('Choose your Crypto', '', cryptoList)

    useEffect(() => {
        const fetchAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const result = await axios.get(url);
            setCryptoList(result.data.Data);
        }
        fetchAPI();
    
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if(coin === '' || crypto === ''){
            setError(true);
            return;
        }

        setError(false);
        setCoin(coin);
        setCrypto(crypto);

    }
    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error message= 'All fields required' /> : null}

            <SelectCoin />

            <SelectCrypto />

            <Button type="submit" value="Calculate" />
        </form>
    )
}

export default Form
