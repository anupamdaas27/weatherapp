import * as React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import WeatherDisplay from './weatherDisplay'

export interface Props {
  name: string;
}

interface State {
  fivedayweather: string;
}

class App extends React.Component <Props, State>  {
  constructor(props: Props){
    super(props);
    this.state = {
      fivedayweather:''
    }
  }

  render() {
    return (
      <div className="App">
            
      <Route path="/forecast/fivedayweather" component={ WeatherDisplay } />
      
    </div>
    );
  }
}

export default App;
