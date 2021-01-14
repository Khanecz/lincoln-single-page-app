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
    NestedListItem,
    NavButton,
    NavButtonLink
} from "../ContentSection/contentElements";
const ProofreadingSection = ({lightBg, id, imgStart, topLine, headLine, description, description2, darkText, 
    lightText, img, alt, isRounded, listItem1, listItem2, listItem3, buttonLink, buttonName, displayButton}) => {
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
                                        <NestedListItem>Scientific writing</NestedListItem>
                                        <NestedListItem>Popular science writing</NestedListItem>
                                        <NestedListItem>Creative writing</NestedListItem>
                                        <NestedListItem>Bachelor/Master theses</NestedListItem>
                                        <NestedListItem>Novels</NestedListItem>
                                        <NestedListItem>Marketing materials</NestedListItem>
                                        <NestedListItem>PR materials</NestedListItem>
                                        <NestedListItem>Business correspondence</NestedListItem>
                                        <NestedListItem>Resumes/CVs</NestedListItem>
                                    </List>
                                </ListItem>
                                <ListItem>
                                    “What is the difference between proofreading and editing?” you might ask. “That's a good question,” I could reply. 
                                    <List>
                                        <NestedListItem>Proofreading is fixing surface level mistakes such as misspellings, incorrect/missed punctuation, grammatical errors, and other inconsistencies.</NestedListItem>
                                        <NestedListItem>Editing is correcting issues at the core of the text. This means things like sentence structure, language clarity, readability, and other things that make writing as effective as possible.</NestedListItem>
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

export default ProofreadingSection
