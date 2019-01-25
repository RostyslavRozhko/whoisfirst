import React from 'react'
import { CirclePicker } from 'react-color'
import Pattern from './Pattern'

const colors = [
  '#00A3DA',
  '#D8127D',
  '#84BF41',
  '#F2B02A',
  '#FF4E00',
  '#6B2B06',
]

const User = (props) => (
  <>
    <div className="container">
      <div className="name-tag">Set your name</div>
      <input onChange={(e) => props.setUser('name', e.target.value)} className="name-input" />
      <div className="name-tag">Select your color</div>
      <CirclePicker 
        className="picker" 
        width={350} 
        colors={colors} 
        circleSize={66} 
        circleSpacing={24} 
        onChangeComplete={(color) => props.setUser('color', color.hex)}  
      />
    </div>

    <style>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .picker {
        margin-top: 20px;
        padding-left: 80px;
      }
      .name-tag {
        text-align: center;
        font-size: 56px;
        color: white;
        margin-top: 50px;
      }
      .name-input {
        border: #131518;
        background: none;
        border-bottom: 2px dashed yellow;
        font-size: 46px;
        margin-top: 20px;
        text-align: center;
        color: white;
        width: 300px;
      }
    `}</style>
  </>
)

export default User