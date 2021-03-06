import styled from 'styled-components';

export const ReviewContainer = styled.div`
color: #fff;
background: #42403C;

@media screen and (max-width: 768px){
    padding: 100px 0;
}
`

export const ReviewWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
margin-top: 64px;
color: #fff;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Text = styled.p`
max-width: 1000px;
margin-top: 50px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#fff' : '#fff')};
`

export const Author = styled.p`
align-items: right;
`