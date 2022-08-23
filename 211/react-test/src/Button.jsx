import React from 'react'
import "./Button.css"
export const Button = ({children,colorScheme,varient,onClick}) => {
  return <button onClick={onClick} className={`lu ${colorScheme || "red"} ${varient || "ghost"}`}>{children}</button>
}
