import React from 'react';

const TopInfo = () => {
    var d = new Date();
    var day = d.getDate();
    var month = d.toLocaleString('default', { month: 'short' });
    var year = d.getFullYear();
    var time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    return (
        <span>{day} {month} {year} @ {time}</span>
    );
}

export default TopInfo;