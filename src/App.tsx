import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Index from './pages/Index';
import Add from './pages/Add';
import Remove from './pages/Remove';

import './App.css';
import { TasksContextProvider } from './contexts/tasksContext';
import Arrange from './pages/Arrange';

function App() {
  return (
    <div className='App'>
      <TasksContextProvider>
        <BrowserRouter>
          <Route path='/arrange' exact render={() => <Arrange />} />
          <Route path='/add' exact render={() => <Add />} />
          <Route path='/remove' exact render={() => <Remove />} />
          <Route path='/' exact render={() => <Index />} />
        </BrowserRouter>
      </TasksContextProvider>
    </div>
  );
}

export default App;
