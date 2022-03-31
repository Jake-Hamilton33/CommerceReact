import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CreatePage from './pages/CreatePage';
import ListPage from './pages/ListPage';
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div classname = "App">
        
          <LoginPage/>
          <Footer/>
      </div>
    );
  };
}

export default App;

/*<Header/>
            <Routes>
              <Route path="/home" exact={true} element={<MainPage/>}/> 
              <Route path="/write" exact={true} element={<CreatePage/>}/> 
              <Route path="/read" exact={true} element={<ListPage/>}/>  
            </Routes>*/