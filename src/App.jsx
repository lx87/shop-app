import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Shop } from './components/Shop';
import { Toaster } from 'sonner'

function App() {
  return (
   <Provider store={store}>
     <div className="wrapper">
      <Header />
        <Toaster
          toastOptions={{
              style: {
              background: '#2d3136',
              color: 'white',
              border: 'none',
              fontSize: '1.2rem',
              textAlign: 'start'
              },
          }}
        />
        <Shop/>
      <Footer />
    </div>
   </Provider>
  )
}

export default App
