import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    render() {
        const divStyle = {
            'text-align':'center'
        }

        return (
            <div style={divStyle}>
              <h1 style={{color:'blue',fontSize:'20px'}}>Hello world!</h1>
                <Car />
                <Car />
            </div>
        );
    }
}

export default App;
