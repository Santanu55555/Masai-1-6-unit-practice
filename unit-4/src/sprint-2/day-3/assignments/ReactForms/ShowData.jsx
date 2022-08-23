import React from "react";

const ShowData = ({ name, age, address, dept, marry, salary }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>{dept}</td>
      <td>{salary}</td>
      <td>{marry ? "Married" : "Not Married"}</td>
    </tr>
  );
};

export default ShowData;
