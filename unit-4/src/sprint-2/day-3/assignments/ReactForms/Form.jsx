import React, { useState } from "react";
import FetchData from "./FetchData";
import "./Form.css";

const Form = () => {
  const [formdata, setFormdata] = useState({
    marry: false,
    dept: "HR",
  });
  const [empData, setempData] = useState([]);

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:3000/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      let data = await res.json();
      setempData([...empData, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Employee Form</h1>

      <form id="inputForm" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Age
          <input type="number" name="age" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Addresss
          <input type="text" name="address" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Department
          <select name="dept" onChange={handleChange} required>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="OP">Operations</option>
            <option value="S&M">Sales & Marketing</option>
          </select>
        </label>
        <br />

        <label>
          Salary
          <input type="number" name="salary" onChange={handleChange} required />
        </label>
        <br />

        <label>
          Married
          <input type="checkbox" name="marry" onChange={handleChange} />
        </label>
        <br />
        <input type="submit" id="btn" value="Submit" />
      </form>
      <FetchData empData={empData} setempData={setempData} />
    </>
  );
};

export default Form;
