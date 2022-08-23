import React,{useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getShoes } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilters = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryFilters || []);

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

  useEffect(() => {
    if (category) {
      setSearchParams({ category });

      dispatch(getShoes({ params: { category } }));
    }
  }, [category, dispatch, setSearchParams]);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" checked={category.includes("Sneakers")}  onChange={handleChange} />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers"   onChange={handleChange} checked={category.includes("Loafers")} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas"   onChange={handleChange} checked={category.includes("Canvas")} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots"   onChange={handleChange} checked={category.includes("Boots")} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
