import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ImageFiles from "./ImageFiles";
import CardList from "./components/CardList";

class App extends Component {
  state = {
    imageFileNames: ImageFiles,
    imagesClicked: [],
    topscore: 0,
    score: 0,
    gamestatus: 0 
  };
  componentDidMount() {
    this.setState({
      imageFileNames: this.shuffle(this.state.imageFileNames)
    }, () => {
      console.log("Shuffled the images on game start");
    });
  }
  handleClick = event => {
    const clickedFile = event.target.alt;
    const wasImageClickedBefore = this.imageClickedBefore(clickedFile);
    if (wasImageClickedBefore) {
      this.setState({
        imageFileNames: this.shuffle(this.state.imageFileNames),
        clickedImages: [],
        score: 0,
        feedback: "Game Over! You Guessed The Same Image Twice!",
        gameStatus: 2
      }, () => {
      });
    } else {
      let newScore = this.state.score + 1;
      if (newScore === this.state.imageFileNames.length) {
        this.setState({
        imageFileNames: this.shuffle(this.state.imageFileNames),
          clickedImages: [],
          score: 0,
          topScore: newScore,
          feedback: "Congrats! You Have Guessed All Of The Images Correctly!",
          gameStatus: 1
          });
      } else {
        const clickedImagesCopy = this.state.clickedImages.slice();
        clickedImagesCopy.push(clickedFile);
        const newTopScore = (newScore > this.state.topScore) ? newScore : this.state.topScore;
        this.setState({
        imageFileNames: this.shuffle(this.state.imageFileNames),
          clickedImages: clickedImagesCopy,
          score: newScore,
          topScore: newTopScore,
          feedback: "Yes! You Guessed The Image Correctly!",
          gameStatus: 0
          }, () => {
        });
      }
    }
  };

  imageClickedBefore = (clickedFileName) => {
  	for (let index=0; index<this.state.clickedImages.length; index++) {
  		if (this.state.clickedImages[index] === clickedFileName) {
        return true;
      }
    }
    return false;
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
   return (
    <div>
      <NavBar score={this.state.score} topScore={this.state.topScore} feedback={this.state.feedback} gameStatus={this.state.gameStatus} />
      <CardList imageFileNames={this.state.imageFileNames} clickHandler={this.handleClick} gameStatus={this.state.gameStatus} />
      <Footer />
    </div>
    );
  }



}

export default App;
