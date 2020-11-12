import React from 'react'
import PropTypes from 'prop-types'

/*
const Hero = ({ heroName }) => {
    let design = null;
    try {
        if (heroName === 'Joker') {
            throw new Error('Not a hero');
        }
        design = (
            <div>
                Hero Name:&nbsp;{heroName}
            </div>
        )
    } catch (error) {
        design = <span>Error occurred</span>
    }
    return design;
}
*/
const Hero = ({ heroName }) => {
    console.log('[Hero] rendered..' + heroName)
    if (heroName === 'Joker') {
        throw new Error('Not a hero');
    }
    return (
        <div>
            Hero Name:&nbsp;{heroName}
        </div>
    );
}
Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero
