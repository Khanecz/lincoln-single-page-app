import React from 'react';
import {ContentContainer,
        ContentWrapper,
        ContentRow,
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Text,
        ImgWrap,
        Img,
        ListItem,
        List,
        NavButton,
        NavButtonLink,
        NestedListItem
} from "../ContentSection/contentElements";

const PricingSection = ({lightBg, id, imgStart, topLine, headLine, description, description2, darkText, 
    lightText, img, alt, isRounded, buttonLink, buttonName, displayButton}) => {

        

    return (
        <>
            <ContentContainer lightBg={lightBg} id={id}>
                <ContentWrapper>
                    <ContentRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{headLine}</Heading>
                            <Text darkText={darkText}>{description}</Text>
                            <Text darkText={darkText}>{description2}</Text>
                            <List>
                                <ListItem>Teaching:
                                    <List>
                                        <NestedListItem>45 minutes: €14</NestedListItem>
                                        <NestedListItem>60 minutes: €18</NestedListItem>
                                        <NestedListItem>90 minutes: €27</NestedListItem>
                                    </List>
                                </ListItem>
                                <ListItem>Proofreading:
                                    <List>
                                         <NestedListItem>€4.50 per page</NestedListItem>
                                    </List>
                                </ListItem>
                                <ListItem>Editing:
                                    <List>
                                         <NestedListItem>€8.50 per page</NestedListItem>
                                    </List>
                                </ListItem>
                            </List>
                        </TextWrapper>
                        <NavButton displayButton={displayButton}>
                            <NavButtonLink aria-label={buttonName} href={buttonLink}>{buttonName}</NavButtonLink>
                        </NavButton>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} isRounded = {isRounded} />
                        </ImgWrap>
                        </Column2>
                    </ContentRow>
                </ContentWrapper>
            </ContentContainer>  
        </>
    )
}

export default PricingSection