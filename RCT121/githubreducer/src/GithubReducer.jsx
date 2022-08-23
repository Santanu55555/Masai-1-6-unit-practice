import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initState={
    loading:true,
    error:false,
    data:null
}


const reducer=(state,action)=>{
switch(action.type){
    case "fetch":{
        return(
            {
                ...state,
                ...state,
                loading: true,
                error: false,
                data: null,
            }
        )
    }
    case "success":{
        return (
            {
                loading:false,
                error:false,
                data:action.payload,
            }
        )
    }
    case "failure": {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      dafault:{
        return state;
      }
}
}







export const GithubReducer = () => {
    const [{loading,error,data}]=useReducer(reducer,initState)
    useEffect(()=>{
        fetchData()
    })
    const fetchData=()=>{
        dispatchEvent({type:"fetch"})
        axios({
            url: "https://api.github.com/search/users",
            method:"GET",
            param:{
                q:"masai"
            },
        }).then((res)=>dispatchEvent({type:"success",payload:res.data})).catch((err)=>dispatchEvent({type:"failure"}))
    }
  return (
    <div>
        {loading && <h1>...Loading</h1>}
        {error && <h2>...Error</h2>}

        {data?.items.map((ok)=>{
            return(
              
                <div key={ok.id}>
                      <img src={ok.avatar_url}/>
                      <p>{ok.login}</p>
                </div>
            )
        })}
    </div>
  )
}
