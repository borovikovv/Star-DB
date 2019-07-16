import React from 'react';
import icon from './Death-Star-icon.png';
import './error-message.css';

const ErrorMessage = () => {
    return(
        <div className="error-message">
            <img className="error-img" 
            src={icon}
            alt="error"/>
            <h1> BOOM </h1>
            <span className="d-flex">
                Что-то пошло не так!
            </span>
            <span className="span2">
                Мы отправили дронов, чтоб подчинить поломку...
            </span>
        </div>
    )
}

export default ErrorMessage;