import React, { Component } from 'react';

import 'tachyons';
import './CompanyList';
import CompanyList from './CompanyList';

const Company = (props) =>
{
    const companyarray = [
        {
            id:1,
            name:'Yash'
        },
        {
            id:2,
            name:'Ramesh'
        },
        {
            id:3,
            name:'Suresh'
        },
        {
            id:4,
            name:'Mahesh'
        }
    ];
    const avatarcard = companyarray.map( (avatar,i) => {
        return <CompanyList id="1" name={companyarray[i].name}></CompanyList>
    })
    return(
        <div>
            <CompanyList name={companyarray[0].name}></CompanyList>
            <CompanyList name={companyarray[1].name}></CompanyList>
            <CompanyList name={companyarray[2].name}></CompanyList>
            <CompanyList name={companyarray[3].name}></CompanyList>
        </div>
    );
}


export default Company;