import React from 'react'
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
    NestedListItem
} from "../ContentSection/contentElements";
const TeachingSection = ({lightBg, id, imgStart, topLine, headLine, description, description2, darkText, 
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
                                <ListItem>
                                    {listItem3}
                                    <List>
                                        <NestedListItem>Test prep (IELTS, CAE, CPE, and FCE.)</NestedListItem>
                                        <NestedListItem>Grammar</NestedListItem>
                                        <NestedListItem>Conversation</NestedListItem>
                                        <NestedListItem>Business English</NestedListItem>
                                    </List>
                                </ListItem>
                            </List>
                        </TextWrapper>
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

export default TeachingSection
