import React, { Component } from "react";
import ImageCard from "./components/ImageCards";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>test</NavBar>
  
    <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
