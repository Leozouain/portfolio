import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import brain from '../assets/brain.gif'
import flydrone from '../assets/flydrone.gif'
import aigram from '../assets/AiGram.gif'

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

        title: 'Fly Drone DF',
        text: " Fly Drone DF was a freelance project aimed at creating a website for a company specializing in aerial imagery through drones. The goal was to establish an online presence to reach new clients, provide a virtual point of contact, and effectively showcase the company's services.The website was designed to offer a seamless user experience while conveying the company's brand message.",
        techs: ['React', 'Tailwind'],
        img: flydrone,
        github: null,
        live: 'https://www.flydronedf.com.br/'
    },
    {

        title: 'AiGram Gallery',
        text: "AiGram Gallery is an AI-powered image gallery platform that enables users to upload, edit, and share their AI-generated images. With seamless integration with the World News API, users can also stay updated on the latest news and developments in artificial intelligence. The platform's central focus is to showcase the creativity and innovation sparked by AI-driven image creation tools, while fostering a collaborative community of AI enthusiasts.2",
        techs: ['React', 'Tailwind', 'World News API '],
        img: aigram,
        github: 'https://github.com/Leozouain/aigramgallery',
        live: 'https://aigramgallery.vercel.app/'
    },
    {

        title: 'Brainwave',
        text: 'A responsive landing page website, based on UI8.net Figma design, seamlessly combines React, Tailwind CSS and Framer-Motion. It features subtle animations, a user-friendly contact form, and responsive layouts. The result is a visually appealing website that caters to various devices.',
        techs: ['React', 'Tailwind', 'Framer-Motion'],
        img: brain,
        github: 'https://github.com/Leozouain/brainwave',
        live: 'https://brainwave-lake.vercel.app/'
    },

]
