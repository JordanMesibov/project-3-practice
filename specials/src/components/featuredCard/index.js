import React from "react";

function FeaturedCard(props) {
  return (
    <div className="card">

      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Type:</strong> {props.type}
          </li>
          <li>
            <strong>Price:</strong> {props.price}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturedCard;