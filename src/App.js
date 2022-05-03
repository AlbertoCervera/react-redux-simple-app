import React from 'react';
import { TaskList } from './components/TaskList';
import {Counter} from "./components/Counter"

function App() {
  return (
    <div className="App">
      <TaskList /> 
      <Counter/>
    </div>
  );
}

export default App;
