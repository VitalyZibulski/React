import React from 'react'
import Radium from 'radium'
import classes from './Car.css'

class Car extends React.Component {

    componentWillReceiveProps(nextProps){
        console.log('App componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('App shouldComponentUpdate')

        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps,nextState){
        console.log('App componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('App componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('App componentWillUnmount')
    }

    render(){
        console.log('render')
        const inputClasses = [classes.input]

        if(this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if(this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0,0,0,.14)',
            ':hover': {
                border: '2px solid #aaa',
                boxShadow:'0 4px 15px 0m rgba(0,0,0,.25)'

            }
        }

        return (
            <div className={classes.Car} style={style}>
                <p>This is car component</p>
                <p>Car name:<strong>{this.props.name}</strong></p>
                <p>Year:<strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car