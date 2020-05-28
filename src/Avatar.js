import React from 'react';

import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

const Avatar = (props) =>
{
    const avatararray=[
        {
            id:1,
            name:"Yash"
        },
        {
            id:2,
            name:"Suresh"
        },
        {
            id:3,
            name:"Ramesh"
        },
        {
            id:4,
            name:"Mahesh"
        }
    ]
    const avatarcard = avatararray.map( (avatar,i) => {
        return <AvatarList id="1" name={avatararray[i].name}></AvatarList>
    })
    return( 
        <div>
            {avatarcard}
        <AvatarList id="1" name={avatararray[0].name}></AvatarList>
        <AvatarList id="2" name={avatararray[1].name}></AvatarList>
        <AvatarList id="3" name={avatararray[2].name}></AvatarList>
        <AvatarList id="4" name={avatararray[3].name}></AvatarList>
        </div>
    );
}
export default Avatar;