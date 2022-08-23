import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookLists from "../Components/BookLists";
import FilterSort from "../Components/FilterSort";
import { getBooks } from "../Redux/action";
import styled from "styled-components";

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <BooksPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListsWrapper>
          <BookLists books={books} />
        </BookListsWrapper>
      </BooksPageWrapper>
    </div>
  );
};

export default Books;

const BooksPageWrapper = styled.div`
  display: flex;
`;

const FilterSortWrapper = styled.div`
  border: 1px solid red;
  width: 300px;
`;

const BookListsWrapper = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
`;
