import React from "react";
import ImageCard from "../ImageCards";

const CardList = (props) => (
	<div className="container">
		<div className="row">
	    {props.imageFileNames.map((imageFileName, index) => {
	      return <ImageCard key={index} imageFileName={imageFileName} alt={imageFileName} clickHandler={props.clickHandler} gameStatus={props.gameStatus} />
	    })}
	  </div>
  </div>
);

export default CardList;