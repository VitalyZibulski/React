import React from 'react'
import './Car.css'

export default props => (
    <div className="Car">
        <p>This is car component</p>
        <p>Car name:<strong>{props.name}</strong></p>
        <p>Year:<strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)