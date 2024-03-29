import styled from 'styled-components';

export const ContentContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? "#42403C" : "black")};

@media screen and (max-width: 768px){
    padding: 100px 0;
}
`

export const ContentWrapper = styled.div`
display: grid;
z-index: 1;
height: 1080px;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 768px) {
    height: auto;
}
`

export const ContentRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
 col1'`: `'col1 col2'`)};

 @media screen and (max-width: 768px) {
     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
 }
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 50px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color: #fff;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 32px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? 'red' : '#17a398')};

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const Text = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#fff' : '#fff')};
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
border-radius: ${({isRounded}) => (isRounded ? "70%" : "")};
`

export const List = styled.ul`

`

export const ListItem = styled.li`
margin-top: 15px;
`

export const NestedListItem = styled.li`
margin-top: 15px;
margin-left: 40px;
`

export const NavButton = styled.nav`
display: ${({displayButton}) => (displayButton ? "flex" : "none")};
align-items: center;


@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavButtonLink = styled.a`
border-radius: 50px;
background: #17a398;
white-space: nowrap;
padding: 10px 22px;
color: #33312E;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-weight: 500;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
}
`