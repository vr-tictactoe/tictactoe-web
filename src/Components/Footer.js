import React from 'react'

const Footer = (props) => (
  <div className='footer'>
    <p>Get Ready for a New Experience of the TicTacToe Game</p>
    <div>{props.children}</div>
  </div>
)

export default Footer