import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { IconName } from '@fortawesome/fontawesome-common-types';
import 'font-awesome/css/font-awesome.min.css';
import { Rate } from 'antd';

interface rating{
    value: number;
    text:string;
    
}


const Rating = (props: rating) => {
    return (
        <div>
      

      <span>
        <Rate allowHalf   value={props.value} />
        {props.value ? <span className="ant-rate-text">{props.value}</span> : ''}
        <span>{props.text && props.text }{/*if there is text display it else vide--{props.text ? props.text : ''}==props.text && props.text*/}</span>
     
      </span>
{/*<div className="stars">
                <span>
                    <i className={props.value >= 1
                    ? 'fas fa-star' 
                    : props.value >= 0.5 
                    ? 'fas fa-star-half-alt'
                    :'fas fa-star' }></i>
                 </span>
                 <span>
                    <i className={props.value >= 2
                    ? 'fas fa-star' 
                    : props.value >= 1.5 
                    ? 'fas fa-star-half-alt'
                    :'fas fa-star' }></i>
                 </span>
                 <span>
                    <i className={props.value >= 3
                    ? 'fas fa-star' 
                    : props.value >= 2.5 
                    ? 'fas fa-star-half-alt'
                    :'fas fa-star' }></i>
                 </span>
                 <span>
                    <i className={props.value >= 4
                    ? 'fas fa-star' 
                    : props.value >= 3.5 
                    ? 'fas fa-star-half-alt'
                    :'fas fa-star' }></i>
                 </span>
                 <span>
                    <i className={props.value >= 5
                    ? 'fas fa-star' 
                    : props.value >= 4.5 
                    ? 'fas fa-star-half-alt'
                    :'fas fa-star' }></i>
                 </span>
                 <span>{props.text && props.text }{/*if there is text display it else vide--{props.text ? props.text : ''}==props.text && props.text*/}{/*</span>
                </div> */}
            
        </div>
        
    )
}

export default Rating
