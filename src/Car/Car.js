import React from 'react'

// function car() {
//     return(
//         <h2>This is car component</h2>
//     )
// }

// const car = () => {
//     return (
//         <h2>This is car component</h2>
//     )
// }

// const car = () => <h2>This is car component</h2>

// const car = () => (
//     <div>
//         This is car component
//         <strong>test</strong>
//     </div>
// )

export default props => (
    <div>
        <p>This is car component</p>
        <p>Car name:<strong>{props.name}</strong></p>
        <p>Year:<strong>{props.year}</strong></p>
    </div>
)