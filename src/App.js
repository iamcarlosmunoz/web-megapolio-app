import React from 'react';
import { Provider } from 'react-redux'
import Welcome from './pages/Welcome'
import store from './redux/store'
import './App.css'

const App = () => (
  <Provider store={store}>
    <main>
      
      <Welcome />
    </main>
  </Provider>
)

export default App;
