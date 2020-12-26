import React from 'react';
import './components.css';

function Quote({loadedQuote}) {
    return (
        <div>
            <h1 className="affirmation">{loadedQuote}</h1>
        </div>
    );
}

export default Quote;