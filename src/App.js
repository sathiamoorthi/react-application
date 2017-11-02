import React, { Component } from 'react';
import logo from './logo.svg';
import Axios from 'axios';
import Header from './header';
import './App.css';
import Products from './products';
import GetProduct from './productbyname';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      products: []
    };
  }

  onChange(e) {
        this.setState({searchText: e.target.value});
  }

   getResults() {
        //calltodb(searchText).then(e => {
           // this.setState({searchResults: e.value})
       // });

      Axios.get('http://localhost:4000/api/products')
      .then((response) => {
        this.setState({ products: response.data});
      });
    }

  componentDidMount() {
    Axios.get('http://localhost:4000/api/products')
      .then((response) => {
        this.setState({ products: response.data});
      });
  }

  render() {
    return (
      <div className="App">
        <div>
        <header>
        </header>
          <GetProduct/>
          </div>
          <div>
        <Products products={this.state.products} />
        </div>

      </div>
    );
  }
}

export default App;
