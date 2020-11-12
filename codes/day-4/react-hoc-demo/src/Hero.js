import React from 'react'
import withErrorBoundary from './withErrorBoundary'

function Hero({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error('Not a Hero')
    }
    return (
        <div>
            Hero:&nbsp;{heroName}
        </div>
    )
}

export default withErrorBoundary(Hero);
