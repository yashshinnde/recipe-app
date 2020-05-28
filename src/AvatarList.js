import React from 'react';
import './Avatar.css';
import 'tachyons';

const AvatarList = (props) => 
{
    return(
    <div className="Avatarstyle ma4 bg-light-purple dib grow pa4">
    <img src={`https://joeschmoe.io/api/v1/${props.name}`} />
    <h1 className="tc">{props.name}</h1>
    <p>{props.work}</p>
        </div>
    );
}

export default AvatarList;