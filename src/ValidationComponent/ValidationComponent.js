import React from 'react';

const ValidationComponent = (props) => {
    if(props.textLength < 5){
        return <p>Text is too short!</p>
    }else if(props.textLength > 15){
        return <p>Text is too long!</p>
    }
    return null; 
};

export default ValidationComponent;