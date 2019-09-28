import React, { Component } from "react";
import ImageCard from "./components/ImageCards";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import cards from "./cards.json.";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Image
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>test</NavBar>
        {this.state.image.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            image={image.Image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
