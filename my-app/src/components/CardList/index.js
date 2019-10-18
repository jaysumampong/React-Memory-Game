import React from "react";
import ImageCard from "../ImageCards";

const CardList = (props) => (
	<div className="container">
		<div className="row">
	    {props.imageFileNames.map((fileName, index) => {
		  return <ImageCard key={index} fileName={fileName} alt={fileName} 
		  clickHandler={props.clickHandler} 
		  gameStatus={props.gameStatus} />
	    })}
	  </div>
  </div>
);

export default CardList;