import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {SessionProvider    as Auth0Provider  } from "next-auth/react"

const MyApp = ({ Component, pageProps }) => {
  return (

    <Auth0Provider  session = {pageProps.session}>

    <Provider   store={store}>
      <Component {...pageProps} />
    </Provider >

    </Auth0Provider>



  )
}

export default MyApp
 	