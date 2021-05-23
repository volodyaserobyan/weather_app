import React from 'react';

import { WeatherContainer } from './containers/WeatherContainer/WeatherContainer';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <WeatherContainer />
    </div>
  );
}

export default App;
