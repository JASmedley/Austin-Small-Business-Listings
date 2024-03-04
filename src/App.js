import React from 'react';
import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import store from './redux/store'
import Navigation from './Components/Navigation'



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
