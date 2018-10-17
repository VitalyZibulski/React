import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

    state = {
        cars: [
            {name:'Ford', year:2018},
            {name:'Audi', year:2018},
            {name:'Mazda', year:2018},
        ],
        pageTitle:'React components',
        showCars:false
    }

   toggleTitleHandler = () => {
        this.setState({
            showCars:!this.state.showCars
        })
    }

    changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
    }

    render() {
        const divStyle = {
            'text-align':'center'
        }

        let cars = null

        if(this.state.showCars) {
            cars = this.state.cars.map((car,index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}
                    />
                )
            })
        }

        return (
            <div style={divStyle}>
              <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleTitleHandler}>Toggle cars</button>

                { cars }
            </div>
        );
    }
}

export default App;
