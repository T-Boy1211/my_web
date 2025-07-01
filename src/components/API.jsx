import axios from "axios";
import { useState } from "react";

const API = () => {
  const [info, setInfo] = useState([]);
  const getData = async()=>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    axios.get(url)
  .then((response)=>{ 
      console.log(response.data)
      setInfo(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  };
  
  return (
    <>
      API
      <button type="button" onClick={getData}>get data</button>
      {info.map((data)=>{
        return <div key={data.id}>{data.title}</div>
      })}
    </>
  )
}

export default API