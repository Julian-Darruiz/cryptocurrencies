import React from 'react'

import styled from '@emotion/styled';

const DivResult = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Quotation = ({result}) => {
    if(Object.keys(result).length === 0) return null;
    return (
        <DivResult>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Info>The high day price is: <span>{result.HIGHDAY}</span></Info>
            <Info>The low day price is: <span>{result.LOWDAY}</span></Info>
            <Info>The last 24hs price is: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>The last update price is: <span>{result.LASTUPDATE}</span></Info>
        </DivResult>
    )
}

export default Quotation
