import React from 'react'
import {ReviewContainer, ReviewWrapper, TextWrapper, TopLine, Text, Author} from './reviewElements';

const ReviewSection = ({review, author, review2, author2, id}) => {
    return (
        <>
            <ReviewContainer id={id}>
                <ReviewWrapper>
                    <TextWrapper>
                        <TopLine>REVIEWS</TopLine>
                        <Text>{review}</Text>
                        <Author>{author}</Author>
                        <Text>{review2}</Text>
                        <Author>{author2}</Author>
                    </TextWrapper>
                </ReviewWrapper>
            </ReviewContainer>
        </>
    )
}

export default ReviewSection
