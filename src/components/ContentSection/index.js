import React from 'react'
import {ContentContainer,
        ContentWrapper,
        ContentRow,
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Text        
} from "./contentElements";

const ContentSection = ({lightBg, id, imgStart, topLine, headLine, description, darkText, lightText}) => {
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
                        </TextWrapper>
                        </Column1>
                        <Column2>

                        </Column2>
                    </ContentRow>
                </ContentWrapper>
            </ContentContainer>  
        </>
    )
}

export default ContentSection
