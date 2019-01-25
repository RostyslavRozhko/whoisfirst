import React from 'react'

const Game = (props) => (
  <>
    <div className="container" style={{background: props.user ? props.user.color : ''}}>
      <div style={{flexGrow: 1}}></div>
      <div className="name">{props.user ? props.user.name : ''}</div>
      { props.showRestart && <button className="restart" onClick={props.handleRestart}>Restart</button> }
    </div>
    
    <style jsx>{`
      .container {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .name {
        color: white;
        font-size: 70px;
        flex-grow: 1;
      }
      .restart {
        margin-bottom: 20px;
        font-size: 22px;
        background: none;
        border: none;
      }
    `}</style>
  </>
)

export default Game