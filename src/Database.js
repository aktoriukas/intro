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
                ref: 'jedmap'
            },
            {
                id: 2,
                title: 'Brand Guidlines',
                ref: 'guidlines'
            },
            {
                id: 3,
                title: 'Invest African Guide',
                ref: 'invest'
            },
            {
                id: 4,
                title: 'Drops bar',
                ref: 'drops'
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
            'Passionate, versatile, people-oriented professional. With more than eight years of experience in all aspects of management, leadership and service. Strong team-building skills and excellent problem-solving abilities. Good understanding and controlling sales and stock. Experienced in organizing and managing big events. Able to work creatively and efficiently whilst meeting the highest standards of presentation and attention to detail.'
        )
    }
}

export default new Database;
