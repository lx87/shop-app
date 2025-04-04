// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { Shop } from './components/Shop';

function App() {
  return (
   <Provider store={store}>
     <div className="wrapper">
      <Header />
        <Shop/>
      <Footer />
    </div>
   </Provider>
  )
}

export default App
