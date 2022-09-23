import './styles.css'
import React from 'react';

// import { Container } from './styles';

function Card(props) {
  return (
    <div className='Card'>
        <div className='Header'>
            <span className="Title">{props.title}</span>
        </div>
        <div className='Content'>
            {props.children}
        </div>  
    </div>
  );
}

export default Card;