import React, { useEffect, useState } from "react";
import axios from "axios";
import TableData from "./TableData";

export default function Home() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
      axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  let returnData =  data.filter((num)=>{
    let searchData
    if( value === ""){
      searchData = num
    }else if(num.category.toLowerCase().includes(value.toLowerCase())){
      searchData = num
    }
    return searchData
  })

  return (
    <div className="home">
      <div>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />{" "}
      </div>
      <div className='tableContentDiv'>
       <TableData data = { returnData ? returnData : data}/>
      </div>
    </div>
  );
}
