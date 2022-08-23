import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
 display: grid;
 grid-template-columns: repeat(3,1fr);
//  background: black;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const showData = async () => {
      try {
        let res = await fetch("http://localhost:8080/books");
        let showData = await res.json();
        console.log('showData:', showData)
        setData(showData)


      } catch (err) {
        console.log('err:', err)

      }
    }
    showData()
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
        {data.map(({props}) => {
          return <BookCard item={{ props }} />;
        })}
      </Grid>
    </>
  );
};
export default Books;
