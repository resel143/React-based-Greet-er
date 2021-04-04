import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greet;
let d = new Date();
d.setHours(19);
let timeStyle;
if(d.getHours()>=0 && d.getHours()<12){
  greet = 'Good Morning';
  timeStyle = {color: 'yellow'};
}else if(d.getHours()>=12 && d.getHours()<18){
  greet= 'Good AfterNoon';
  timeStyle = {color: 'red'};
}else if(d.getHours()>=18 && d.getHours()<=20){
  greet = 'Good Evening';
  timeStyle = {color: 'blue'};
}else{ greet = 'Good Night';timeStyle = {color: 'black'};}

ReactDOM.render(
    <React.Fragment>
      <div className='Greeting-box'>
        <div><h1>Hi Sir, </h1></div> <div style={timeStyle}><p>{greet}</p></div>
      </div>
    </React.Fragment>,
    document.getElementById('root') 
);