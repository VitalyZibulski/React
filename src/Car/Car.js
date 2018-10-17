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

export default () => (
    <div>
        <p>This is car component</p>
        <p><strong>{1 + 1}</strong></p>
        <p><strong>{Math.random()}</strong></p>
    </div>
)