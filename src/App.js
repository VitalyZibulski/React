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
                <Car name={'Ford'} year={2018}/>
                <Car name="Audi" year={2016}/>

            </div>
        );
    }
}

export default App;
