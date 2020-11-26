import styled from 'styled-components';

export const PriceCalculatorContainer = styled.div`
height: 350px;
display: flex;
border: 2px solid black;
flex-direction: column;
justify-content:space-around;
align-items: center;
border-radius: 50px;
width: 100%;
background: #17a398;

`

export const ResultRow = styled.div`
color: black;
display: flex;
font-size: 24px;
font-weight: bold;
`

export const DurationRow = styled.div`
display: flex;
margin-top: 5px;
`

export const CurrencyRow = styled.div`
display: flex;
margin-top: 5px;
`

export const StudentNumberRow = styled.div`
display: flex;
margin-top: 5px;
`

export const DurationBtn30 = styled.button`
background: ${({isButtonToggled}) => (isButtonToggled ? "green" : "white")};
`
export const DurationBtn60 = styled.button`
background: ${({isButtonToggled}) => (isButtonToggled ? "green" : "white")};
`
export const DurationBtn90 = styled.button`
background: ${({isButtonToggled}) => (isButtonToggled ? "green" : "white")};
`

export const StudentNumberBtn = styled.button`

`

export const CurrencyBtn = styled.button`

`