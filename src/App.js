import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        const divStyle = {
            'text-align':'center'
        }

        return (
            <div style={divStyle}>
              <h1 style={{color:'blue',fontSize:'20px'}}>Hello world!</h1>
                {/*'font-size':'20px' or fontSize:'20px'*/}
            </div>
        );
    }
}

export default App;
