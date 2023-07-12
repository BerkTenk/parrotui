import React from 'react'



export const Button = (props) => {
  return <button {...props} className={`${props.type}`}>{props.text}</button>
}
