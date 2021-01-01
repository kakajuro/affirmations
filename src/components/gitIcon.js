import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import './components.css'

const buttonClicked = () => {
    window.open('https://github.com/swishyDev/affirmations');
}

function GithubIcon() {
    return (
        <div className='icon-div'>
            <AiOutlineGithub className="gitIcon" size={40} onClick={() => buttonClicked()}/>
        </div>
    );
}

export default GithubIcon;