import React from "react";
import axios from "axios";
import { useState } from "react";
import GithubCard from "./GithubCard";
import ReactPaginate from "react-paginate";
const { useEffect } = require("react");
const gitHubUsers = (q = "Santanu") => {
  return axios( `https://api.github.com/search/repositories?q=${q}&per_page=200`, {
    // https://api.github.com/search/repositories?q=${query}
    method: "GET",
   
    params: {
      q,
    },
  });
};

function Github() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("santanu55555");
  const [text, setText] = useState("santanu55555");
  console.log(data);
  useEffect(() => {
    gitHubUsers(query)
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [query]);

  const handleClick = (query) => {
    setQuery(query);

    console.log(query);
  };





  const [pageNo, setPageNo] = useState(0);
  const UserPerPage = 10;
  const pageVisited = UserPerPage * pageNo;
  const displayUsers =data
    .slice(pageVisited, pageVisited + UserPerPage)
    .map((item) => {


      return (
        <GithubCard
        key={item.id}
        {...item}
        avatar={item.owner.avatar_url}
        name={item.name}
        language={item.language}
   
      />
      );


    });
//     console.log(1)
//  console.log(data.items)
//  console.log(1)
    const pageCount = Math.ceil(data.length / UserPerPage);

    const ChangePage = ({ selected }) => {
      setPageNo(selected);
    };
  

  return (
    <>
      <div>
        <h1 style={{color:"Blue",marginBottom:"20px",textAlign:"center",padding:"20px",boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",}}> Github Users</h1>
        {/* {loading && <div>...Loading</div>}
        <button onClick={() => setLoading(!loading)}>Toogle</button> */}
        <div>
          <input
            style={{
              paddingLeft: "20px",
              fontSize: "17px",
              // backgroundColor: "rgb(10,25,41)",
              height: "38px",
              color:"Blue",
              marginBottom: "30px",
              width: "300px",
              margin: "auto",
              borderRadius: "5px",
              
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            type="text"
            value={text}
            id="place"
            placeholder="Search here"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            style={{
              marginLeft: "30px",
              height: "46px",
              width: "120px",
              border: "none",
              fontSize:"20px",
              backgroundColor: "rgb(1,5,41)",
              color: "white",
              marginBottom: "31px",
              borderRadius: "5px",
              cursor:"pointer",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
            onClick={()=>handleClick(text)}
          >
            Search
          </button>
        </div>
        {displayUsers}
        {/* <SearchBox handleClick={handleClick} /> */}
        <div id="page">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={ChangePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"prevousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"PaginationActive"}
          />
        </div>
      </div>
    </>
  );
}


export default Github;