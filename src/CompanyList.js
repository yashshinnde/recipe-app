import React, {Component} from 'react';
import './Company.css';
const CompanyList = (props) =>
{
    return(
        <div className="ava dib grow ma4 bg-light-blue">
            <img  className="ava" src={`https://joeschmoe.io/api/v1/${props.name}`} />
            <h2>{props.name}</h2>
            <p>Web developer</p>
        </div>
    );
}
export default CompanyList;