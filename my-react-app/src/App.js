import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'Software Developer'
    },
    show: false,
    mountTime: 0
  };

  componentDidMount() {
    this.setState({ mountTime: new Date().getTime() });
    this.interval = setInterval(() => {
      this.setState({ mountTime: new Date().getTime() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {(new Date().getTime() - mountTime) / 1000} seconds</p>
      </div>
    );
  }
}

export default App;
