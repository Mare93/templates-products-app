import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';

import {Container, Nav,NavLink,NavItem} from 'reactstrap';
const axios = require('axios'); 




class App extends Component {
    state = {
      products:[],
      templates:[],
      toggleCards: true
    }
    
  componentDidMount() {
    axios.get('https://api.kadporastembicu.dev/v1/products')
      .then(res => this.setState({ products: res.data }));
      
      axios.get('https://api.kadporastembicu.dev/v1/templates')
      .then(res => this.setState({ templates: res.data }))
      }
  render() {
    
    return (
    
    <div className="App">
      <h1>Manage Subscription</h1>
      <Container>
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#">Templates</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Products</NavLink>
          </NavItem>
          
        <hr />
        </Nav>
      </div>
        {this.state.toggleCards?<ItemList items={this.state.products}>
        </ItemList>:
        <ItemList items={this.state.templates}>
        </ItemList>}
      </Container>
      
    </div>
    )}
}

export default App;
