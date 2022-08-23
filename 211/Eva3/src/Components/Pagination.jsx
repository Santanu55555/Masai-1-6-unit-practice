import { useState } from "react";
import { useMemo } from "react";

export const Pagination = ({ total, selected, onPageChange }) => {

  const [page, setpage] = useState(1);
  // var form = document.getElementById("boxForm");
  // noBoxes = form.elements["total"].value;

  // for (var i = 0; i < noBoxes; i++) {
  //   var div = document.createElement("div");
  //   div.style.color = "";
  //   div.style.backgroundColor = getRandomColor();
  //   div.style.height = "50px";
  //   div.style.width = "50px";
  //   document.body.appendChild(div);
  // }


  return <div className="pageContainer">
<div id="pages">

</div>
<button onClick={()=>setpage(page+1)}>Next</button>
<button onClick={()=>setpage(page-1)}>Prev</button>
  </div>;
};
