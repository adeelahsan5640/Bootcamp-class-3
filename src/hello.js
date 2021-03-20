import React from 'react';

function Hello(props) {
    return (
      <div>
        <h1> Today is {props.day}</h1>
        <h1> Tommorrow is {props.tday}</h1>
      </div>  
    )
}
export default Hello;