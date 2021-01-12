import portrait from '../../images/lil.jpg';
import teachingImg from '../../images/teaching.svg';
import proofreadingImg from '../../images/proofread.svg';
import money from '../../images/money.svg';
import cv from '../../files/cv.pdf';
import portfolio from '../../files/portfolio.pdf'


export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'About me',
    headLine: `I've been told I'm at least moderately cool.`,
    description: 'Hello! My name is Lincoln and I am a professional teacher, proofreader, editor, and supreme grandmaster* of the English language.',
    description2: '*citation needed',
    buttonLabel: 'Contact me',
    imgStart: false,
    primary: true,
    darkText: false,
    img: portrait,
    isRounded: true,
    listItem1: `I have been teaching English since 2015. (That's 6 years... but I'm not a math teacher, so make sure to check my work.)`,
    listItem2: `I am from Michigan in the United States, which means that I have a standard Midwestern American accent. (Though I have been told that I sound a little Canadian, and I'm taking that as a compliment.)`,
    listItem3: `I studied linguistic anthropology at university. (So you can look forward to a plethora of bonus knowledge about language, which might be useful if you're ever a contestant on Jeopardy.)`,
    listItem4: `I am truly passionate about knowledge and learning. Knowledge is power.`,
    listItem5: `My hobbies are: writing, reading, gaming, nature, science, and traveling. (Basically I'm a huge nerd.)`,
    buttonLink: cv,
    buttonName: "Download CV",
    displayButton: true,

}

export const homeObjTwo = {
    id: 'teaching',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Teaching',
    headLine: `I'll teach you. I'll teach your mother, and your dog too.`,
    buttonLabel: 'Contact me',
    imgStart: true,
    primary: true,
    darkText: false,
    img: teachingImg,
    isRounded: false,
    listItem1: `I  was TEFL certified at The Language House in Prague, Czech Republic. They are a recognized member of the College of Teachers, U.K., accredited and externally monitored by IATQuO. (Honestly, I'm super impressive.)`,
    listItem2: `I also received a Young Learners and Teens Certificate. This is a 12-hour IATQuO-accredited TEFL extension certificate focused on the methodology and skills required to teach English to children aged 3-17. (Note: Though I am certified to teach children, I specialize in teaching people over the age of 15.)`,
    listItem3: `Specialized in:`,
    displayButton: false
}

export const homeObjThree = {
    id: 'proofreading',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Proofreading',
    headLine: 'Grammar Nerd Extraordinaire',
    description: '',
    buttonLabel: 'Contact me',
    imgStart: false,
    primary: true,
    darkText: false,
    img: proofreadingImg,
    isRounded: false,
    buttonLink: portfolio,
    buttonName: "Download Portfolio",
    displayButton: true,
    listItem1: `I have been doing proofreading and editing for 8 years. `,
    listItem2: `I specialize in American English, but I can also proofread and edit in British, Canadian, and Australian English.`,
    listItem3: `Experience with:`,

}

export const homeObjFour = {
    id: 'pricing',
    lightBg: false,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Prices',
    headLine: 'Money',
    description: '',
    buttonLabel: 'Contact me',
    imgStart: true,
    primary: true,
    darkText: false,
    img: money,
    isRounded: false,
    displayButton: false

}