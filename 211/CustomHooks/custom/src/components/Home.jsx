import React from 'react'
import { useLagana } from '../hooks/useLagana'
import { useSamayKhatm } from '../hooks/useSamayKhatm'

export const Home = () => {
  //   const {data,loading,error}=useLagana('')
  //   if(error) console.log(error)
  // return (
  //  <>
  //   {loading && <div>Loading...</div>}
  //  {data && <div>{data.map(item => <div>{item}</div>)}</div>}
  //  </>
  // )

  const ready=useSamayKhatm()
  return(
    <>
    <div>{ready? "ready":"not ready"}</div>
    </>
  )
}
