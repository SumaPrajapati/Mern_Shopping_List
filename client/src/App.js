import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap'
import { Provider } from 'react-redux'
import store from './store'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemAdd from './components/ItemAdd'

class App extends Component {
  render(){
    return (
      <Provider store={store}>
         <div /* className="App" */>
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header> 
        <AppNavbar/>
        <Container>
          <ItemAdd/>
          <ShoppingList/>
        </Container>
          
      </div>
      </Provider>
     
    )
  }
 
}

export default App;
