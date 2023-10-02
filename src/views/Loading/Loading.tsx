import React from 'react';

import "./Loading.scss"
import "../../index.scss"

export function Loading({setShowLoadingScreen}: 
    {setShowLoadingScreen: 
        React.Dispatch<React.SetStateAction<boolean>>
    }) {
    return (
        <div className='view view--loading'>
            <article onClick={() => setShowLoadingScreen(false)} className='logo-container'>
                <img src='/front-page-logo.svg' alt='Interval logo' />
            </article>
        </div>
    )
}
