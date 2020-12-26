import React from 'react';
import Loader from "react-loader-spinner";
import './components.css'

function loadingSpinner() {
    return (
        <Loader
            type="Oval"
            color="#5196f0"
            height={50}
            width={50}
            className="spinner"
        />
    );
}

export default loadingSpinner;