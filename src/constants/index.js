import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import brain from '../assets/brain.gif'

import react from '../assets/react.png'

export const skills = [
    {
        id: '1',
        title: 'HTML',
        img: html
    },
    {
        id: '2',
        title: 'CSS',
        img: css
    },
    {
        id: '3',
        title: 'React',
        img: react
    },
    {
        id: '4',
        title: 'Tailwind',
        img: tailwind
    },
    {
        id: '5',
        title: 'GitHub',
        img: github
    },

]

export const nav = [
    {
        name: 'Home',
        url: '#hero'

    },
    {
        name: 'About Me',
        url: '#aboutMe'

    },
    {
        name: 'Projects',
        url: '#projects'

    },
    {
        name: 'Contact',
        url: '#contact'

    }
]

export const projects = [
    {
        title: 'Brainwave',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat molestiae explicabo mollitia vitae voluptates. Repellat dolorum fugit temporibus eos corrupti qui sint explicabo consequuntur excepturi exercitationem voluptate ducimus aliquid, dolorem similique sed! Facere, quis alias?',
        techs: ['React', 'Tailwind'],
        img: brain,
        github: 'https://github.com/Leozouain/brainwave',
        live: 'https://brainwave-lake.vercel.app/'
    }
]