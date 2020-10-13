import './SeasonDisplay.css';
import React from 'react';

const SeasonConfig = {
    Summer: {
        text: "Let's hit to beach!!",
        iconName: "sun"
    },
    Winter: {
        text: "Burr, it's Chilly!!",
        iconName: "snowflake"
    }
}

const getSeason = (lat, mnth) => {
    if (mnth > 2 && mnth < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {
    console.log(new Date().getMonth());
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = SeasonConfig[season];
    return (<div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon `} />
    </div>)
}

export default SeasonDisplay;