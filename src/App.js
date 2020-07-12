import React, { Component } from 'react';
import './App.css';
import HobbyOne from './components/HobbyOne';
import HobbyTwo from './components/HobbyTwo';
import HobbyThree from './components/HobbyThree';
import Item1 from './assets/writingimg.jpg'
import Item2 from './assets/actingimg.jpg'
import Item3 from './assets/programmingimg.jpeg'



class App extends Component {
  constructor() {
    super();

    this.state = {
      hobbyOne: 'Writing',
      hobbyTwo: 'Acting',
      hobbyThree: 'Programming',
  }
}

    render() {
    return (
      <div className="App">
        <h1>My Hobbies</h1>
        <HobbyOne
        hobbyOne={this.state.hobbyOne}
        />
        <img src={Item1}></img>
        <p>My first favorite hobby is to write. I love to take myself into a completely different world and create new stories with characters like me. It is something i've recently discovered that I enjoy but am also not terrible at. I would really like to combine my love for writing and acting one day and turn it into a film. </p>
        
        <HobbyTwo
        hobbyTwo={this.state.hobbyTwo}
        />
        <img src={Item2}></img>
        <p>My second favorite hobby is to act. I've always had an admiration for people in film. As I got older I realized that it was something I was interested in. After doing a couple of jobs here and there I loved it. I still love it and it will always have a special place in my heart whether I pursue it or not. </p>

        <HobbyThree
        hobbyThree={this.state.hobbyThree}
        />
         <img src={Item3}></img>
         <p>My third favorite hobby is programming. It is a recent addition into the many things I would like  to learn about. Coding is very cool and something my dad pitched to me for a long time. He always said it was a good idea to get into it and that I could code and act on the side. Now it's something i genuinely enjoy doing. </p>
      </div>
    );
  }
}

export default App;
