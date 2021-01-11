import portrait from '../../images/lil.jpg';
import teachingImg from '../../images/teaching.svg';
import proofreadingImg from '../../images/proofread.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'About me',
    headLine: `I've been told I'm at least moderately cool.`,
    description: 'Hello! My name is Lincoln and I am a professional teacher, proofreader, editor, and supreme grandmaster* of the English language.',
    description2: 'Fun Facts:',
    buttonLabel: 'Contact me',
    imgStart: false,
    primary: true,
    darkText: false,
    img: portrait,
    isRounded: true
}

export const homeObjTwo = {
    id: 'teaching',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Teaching',
    headLine: `I'll teach you. I'll teach your mother, and your dog too.`,
    description: 'I will teach you, I will teach your mother and your dog, too.',
    buttonLabel: 'Contact me',
    imgStart: true,
    primary: true,
    darkText: false,
    img: teachingImg,
    isRounded: false
}

export const homeObjThree = {
    id: 'proofreading',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Proofreading',
    headLine: 'Grammar Nerd Extraordinaire',
    description: 'I will proofread you, I will proofread your mother and your dog, too.',
    buttonLabel: 'Contact me',
    imgStart: false,
    primary: true,
    darkText: false,
    img: proofreadingImg,
    isRounded: false
}