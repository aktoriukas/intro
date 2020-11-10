import Github from './icons/github.png';
import Email from './icons/email.png';
import LinkedIn from './icons/linkedin.png';
// import React from 'react';


class Database  {
    get projects () {
        return [
            {
                id: 7,
                title: 'On the edge',
                ref: 'edge',
                info: 'Implementing dinamic design for whole website / VanillaJS / Sass / Twig / Mobile',
                url: false
            },
            {
                id: 6,
                title: 'rota_me',
                ref: 'rotaMe',
                info: 'Rota template application / React / Sass'
            },
            {
                id: 5,
                title: 'Jedmap',
                ref: 'jedmap',
                info: 'Ipad application / React / Sass ',
                url: false
            },
            // {
            //     id: 2,
            //     title: 'Isdb Development bank',
            //     ref: 'isdb',
            //     info: 'Support on adding features / JavaScript / Sass',
            //     url: 'https://www.isdb.org/'
            // },
            {
                id: 3,
                title: 'Brand Guidlines',
                ref: 'guidlines',
                info: 'Collection of Elements / Sass / VanillaJS / Twig',
                url: 'https://isdb-brand.campus.goodcaesar.org/'
            },
            {
                id: 2,
                title: 'Invest African Guide',
                ref: 'invest',
                info: 'Redesigning from the ground up / Sass / Html / Mobile',
                url: 'https://investmentguide.africa/'
            },
            {
                id: 1,
                title: 'Drops bar',
                ref: 'drops',
                info: 'Static bar website / Html / Css',
                url: false
            }
        ];
    }
    get skills () {
        return [
            {
                id: 1,
                title: 'React',
                level: 50
            },
            {
                id: 2,
                title: 'Sass',
                level: 90
            },
            {
                id: 3,
                title: 'Vanilla JS',
                level: 60
            },
            {
                id: 4,
                title: 'Html',
                level: 90
            },
            {
                id: 5,
                title: 'PHP',
                level: 20
            },
            {
                id: 6,
                title: 'Twig',
                level: 40
            }
        ]
    }
    get socialMedia () {
        return [
            {
                id:1,
                title: 'git-hub',
                url: 'https://github.com/aktoriukas',
                logo: Github

            },
            {
                id:2,
                title: 'email',
                url: 'mailto: gediminas.strumila@gmail.com',
                logo: Email

            },
            {
                id:3,
                title: 'linkedIn',
                url: 'https://linkedin.com/in/strumila/',
                logo: LinkedIn

            }
        ]
    }
    get about () {
        return (
            'Passionate and thirsty for knowledge / Excellent in problem-solving / Working creatively and efficiently whilst meeting the highest standards and attention to detail.'
        )
    }
}

export default new Database ();
