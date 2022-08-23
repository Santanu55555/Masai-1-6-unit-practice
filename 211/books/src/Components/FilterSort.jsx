import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBooks } from "../Redux/action";
const FilterSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilters = searchParams.getAll("category");
  const initialCategorySorts = searchParams.getAll("sortBy");
  const [category, setCategory] = useState(initialCategoryFilters || []);
  const [sortBy, setSortBy] = useState(initialCategorySorts[0] || "");

  const handleChange = (e) => {
    const option = e.target.value;
    let newCategoryOptions = [...category];
    if (category.includes(option)) {
      newCategoryOptions.splice(newCategoryOptions.indexOf(option), 1);
    } else {
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });

      dispatch(getBooks({ params: { category } }));
    }
  }, [category, dispatch, setSearchParams]);

  useEffect(() => {
    if (sortBy) {
      let params = {
        category: searchParams.getAll("category"),
        sortBy,
      };
      let getTodoParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: "release_year",
          _order: sortBy,
        },
      };
      setSearchParams(params);
      dispatch(getBooks(getTodoParams));
    }
  }, [sortBy, searchParams, setSearchParams, dispatch]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Novel"
            checked={category.includes("Novel")}
          />
          <label htmlFor="">Novel</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Motivational"
            checked={category.includes("Motivational")}
          />
          <label htmlFor="">Motivational</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
          />
          <label htmlFor="">Science_Fiction</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="Thriller"
            checked={category.includes("Thriller")}
          />
          <label htmlFor="">Thriller</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        Ascending
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        Descending
      </div>
    </div>
  );
};

export default FilterSort;
