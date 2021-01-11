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
        NavButtonLink
} from "./contentElements";

const ContentSection = ({lightBg, id, imgStart, topLine, headLine, description, description2, darkText, 
    lightText, img, alt, isRounded, listItem1, listItem2, listItem3, listItem4, listItem5, buttonLink, buttonName, displayButton}) => {
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
                                <ListItem>{listItem1}</ListItem>
                                <ListItem>{listItem2}</ListItem>
                                <ListItem>{listItem3}</ListItem>
                                <ListItem>{listItem4}</ListItem>
                                <ListItem>{listItem5}</ListItem>
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

export default ContentSection
