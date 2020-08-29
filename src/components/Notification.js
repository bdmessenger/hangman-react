import React from 'react'

const Notification = ({isNotificationDisplayed}) => {
    return(
        <div className={`notification-container ${isNotificationDisplayed ? 'show' : ''}`} id="notification-container" >
            <p>You have already entered this letter</p>
        </div>
    );
}

export default Notification