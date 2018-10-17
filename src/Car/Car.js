import React from 'react'

export default props => (
    <div style={{
        border:'1px solid #ccc',
        marginBottom:'10px'
    }}>
        <p>This is car component</p>
        <p>Car name:<strong>{props.name}</strong></p>
        <p>Year:<strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        {/*<button onClick={props.onChangeTitle}>Click</button>*/}
    </div>
)