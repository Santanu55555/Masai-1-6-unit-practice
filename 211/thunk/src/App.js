import React from 'react'
import { Provider } from 'react-redux'
import MainRoutes from './Pages/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Redux/store'
import axios from "axios";

axios.defaults.baseURL ="http://localhost:8080";
const App = () => {

  return (
    <div>
        <BrowserRouter>
    <Provider store={store}>
  <MainRoutes/>
  </Provider>
  </BrowserRouter>
    </div>
  )
}

export default App