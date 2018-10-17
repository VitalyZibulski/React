import React from 'react'

export default props => (
    <div>
        <p>This is car component</p>
        <p>Car name:<strong>{props.name}</strong></p>
        <p>Year:<strong>{props.year}</strong></p>
        { props.children }
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)