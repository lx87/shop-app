import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Shop } from './layout/Shop';
import ToasterProvider from './components/helpers/ToasterProvider';

function App() {
  return (
   <Provider store={store}>
    <ToasterProvider/>
     <div className="wrapper">
      <Header />
        <Shop/>
      <Footer />
    </div>
   </Provider>
  )
}

export default App
