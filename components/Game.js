import React from 'react'

const Game = (props) => (
  <>
    <div className="container">
      <button onClick={props.handleClick} />
    </div>
    
    <style jsx>{`
      .container {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
      button {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: #d2272d;
        border: none;
      }
    `}</style>
  </>
)

export default Game