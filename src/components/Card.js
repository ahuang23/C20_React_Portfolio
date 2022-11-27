import React from 'react';


// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
  const cardStyle = {
    width: '18rem',
    height: '25rem'
  };


  return (
    <div className="container">
    
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Card cap"
          height="150px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">Skills: {props.skills}</p>

        </div>
      </div>
    </div>
  );
}
