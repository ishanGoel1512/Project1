import React from 'react';
import './App.css';
import {Connector} from 'mqtt-react-hooks';
import Student from './components/Student';
import { Switch , Route} from 'react-router-dom';
import Teacher from './components/Teacher';
function App() {
  return (
    <Connector brokerUrl='mqtt://broker.emqx.io'>
      <Switch>
      <Route exact path='/student'>
          <Student/>
      </Route>
      <Route exact path='/teacher'>
          <Teacher/>
      </Route>
      </Switch>
   
    </Connector>
  );
}

export default App;
