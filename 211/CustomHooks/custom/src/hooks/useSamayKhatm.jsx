import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const useSamayKhatm = () => {

 const [ready,setReady]=useState(false)
    
 useEffect(()=>{
let timer= setTimeout(()=>{
    setReady(true)
},3000)
clearTimeout(timer)
 },[])
 return ready
}
