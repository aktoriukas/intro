import React, { Component } from 'react'
import Database from '../Database';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='made-by'>Copyright © 2020—2020. G.S </div>
                <ul className='social-media'>
                    {Database.socialMedia.map((media) => (
                        <li key={media.id}>
                            <a href={media.url}>
                                <img alt={media.title} className='logo' src={media.logo}></img>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
