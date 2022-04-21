import '../styles/globals.css'
import styles from '../styles/globals.module.scss'
import Layout from './layout/Layout'
import {Provider} from 'react-redux'
import store from '../components/redux/store'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  
  let persistor = persistStore(store); 
  
  return ( 
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {() => (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )} 
      </PersistGate>
    </Provider>
    
   ) 
}

export default MyApp
