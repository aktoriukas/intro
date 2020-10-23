import Github from './icons/github.png';
import Email from './icons/email.png';
import LinkedIn from './icons/linkedin.png';
import React from 'react';


class Database  {
    get projects () {
        return [
            {
                id: 1,
                title: 'Jedmap',
                ref: 'jedmap',
                info: 'Working on Ipad application controller / React / Sass ',
                url: false
            },
            {
                id: 2,
                title: 'Brand Guidlines',
                ref: 'guidlines',
                info: 'Creating elements collections website / Sass / JavaScript / Html / Twig',
                url: 'https://isdb-brand.campus.goodcaesar.org/'
            },
            {
                id: 3,
                title: 'Invest African Guide',
                ref: 'invest',
                info: 'Redisigning website from the ground up / Sass / Html',
                url: 'https://investmentguide.africa/'
            },
            {
                id: 4,
                title: 'Drops bar',
                ref: 'drops',
                info: 'Website from the scratch / Html / Css',
                url: false
            }
        ];
    }
    get skills () {
        return [
            {
                id: 1,
                title: 'React'
            },
            {
                id: 2,
                title: 'Sass'
            },
            {
                id: 3,
                title: 'Vanilla JS'
            },
            {
                id: 4,
                title: 'Html'
            },
            {
                id: 5,
                title: 'PHP'
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
                url: 'https://github.com/aktoriukas',
                logo: Email

            },
            {
                id:3,
                title: 'linkedIn',
                url: 'https://github.com/aktoriukas',
                logo: LinkedIn

            }
        ]
    }
    get about () {
        return (
            'Passionate and thirsty for knowledge. Excellent in problem-solving.Working creatively and efficiently whilst meeting the highest standards and attention to detail.'
        )
    }
}

export default new Database;
