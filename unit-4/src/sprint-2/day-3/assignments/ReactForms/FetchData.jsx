import React, { useEffect } from "react";
import ShowData from "./ShowData";

const FetchData = ({ empData, setempData }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:3000/employee`);
        let data = await res.json();
        setempData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {empData.length > 0 && (
        <>
          <h1>Employees Data</h1>
          <table id="employees">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital Status</th>
              </tr>
            </thead>
            <tbody>
              {empData.map((emp) => {
                return <ShowData key={emp.id} {...emp} />;
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default FetchData;
