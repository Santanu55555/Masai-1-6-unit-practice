import React from 'react'

export const Student = ({avatar,name,rating,salary,placed}) => {
  return (
    <div>

        <img src={avatar} alt="logo" />
        <div>
            <div>Name:{name}</div>
            <div>Rating:{rating}</div>
        </div>
        <div>Salary:{salary}</div>
        <div>Placed:{placed}</div>
    </div>
  )
}
