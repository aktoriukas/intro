import React, { Component } from 'react'
import Database from '../Database';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>

                <div className='made-by'>Copyright © 2020—2020. G.S made using React</div>
                <div className='social-media'>

                    {Database.socialMedia.map((media) => (

                        <a key={media.id} href={media.url} rel='noopener noreferrer' target='_blank'>
                            <img alt={media.title} className='logo' src={media.logo}></img>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
}
