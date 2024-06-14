import React from 'react'

const Button = ({onClick, label}) => {
    return <button onClick={onClick}>{label}</button>
}

const AbstractComponent = () => {
    const handleClick = () => {
        alert("Button clicked");
    }

  return (
    <div style={{border: '1px solid red'}}>
        <h1>Abstraction</h1>
        <Button onClick={handleClick} label="Abstracted Button" />
    </div>
  )
}

export default AbstractComponent