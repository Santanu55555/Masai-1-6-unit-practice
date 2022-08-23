import React, { useEffect, useState } from 'react'
import Clickme from '../components/Button'
import { Student } from './student'
import axios from 'axios'
import styles from './Home.module.css'
import data from '../db.json'

export const Home = () => {
 
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [page,setPage]=useState(1)
    const [sortby,setSortby]=useState("ASC")
    const [title,setTitle]=useState("Sort by Descending Salary")
    const [sortdata, setSortdata] = useState([])
    const [dataSetTable, setdataSetTable] = useState([])

    useEffect(() => {
        setLoading(true)
        getData()
    },[page,sortby])

    const getData =async () =>{
    try{
       
            let result=await axios.get("http://localhost:8080/data",{
            params: {
                _page:page,
                _limit:10,
                _sort:"salary",
                _order:sortby
            }
        })
        setData(result.data)
        setError(false)
        setLoading(false)
    }
catch(error){
    setError(true)
    setLoading(false)
}
    }
    const handleClick = ()=>{
        if(sortby==="ASC"){
//  data.sort((a,b)=>(a.salary>b.salary))
            setSortby("DESC")
            setData(data)
            // data.sort((a,b)=>a.salary-b.salary)
            setTitle("Sort by Ascending Salary")
            setLoading(true)
        }
        else{
            //  data.sort((a,b)=>(b.salary>a.salary))
             setSortby("ASC")
              setData(data)
            setTitle("Sort by Descending Salary")
            setLoading(true)
        }
 
    }
    const Handle1=()=>{
         data.sort((a,b)=>b.rating-a.rating)
       
  
   setData(data)
  
  };
 
    return (
    <div>

        <div>
            {loading && <div>...loading</div>  }
            {error && <div>Something went wrong</div>}
             <Clickme onClick={handleClick} title={title}>Sort me</Clickme>
        <Clickme title="Next" onClick={()=>setPage(page+1)}>Next</Clickme>
        <Clickme title="Previous" onClick={()=>setPage(page-1)} disabled={page===1}>Prev</Clickme>
        <Clickme title="Only Santanu" onClick={Handle1}>Only Santanu</Clickme>
        </div>
      <div className={styles.lelo}>
            {data.map((item)=>{
            return <Student key={item.id} {...item}/>
        })}
      </div>
       
    </div>
  )
}
