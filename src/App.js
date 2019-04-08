import React, { Component } from 'react';
import './App.css';
import GoldCount from './components/GoldCount/GoldCount';
import FindGold from './components/FindGold/FindGold';
import GamblingHistory from './components/GamblingHistory/GamblingHistory';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GoldCount />
      <FindGold />
      <GamblingHistory />
      </div>
    );
  }
}

export default App;
