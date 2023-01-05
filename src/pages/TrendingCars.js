import React from "react";
import axios from "axios";
import "./TrendingCar.css";
import { useEffect, useState } from "react";
import SingleContent from "../SingleContent/SingleContent";


 let API_URL = `https://www.dubicars.com/api/dev-test`;
 const requestdata = () => fetch(API_URL).then((res) => res.json());
const TrendingCars = () => {
  const [data, setData ]= useState([]);
 
  // const () = async () => {
  //   const { data } = await axios.get(`https://www.dubicars.com/api/dev-test`);
  // console.log(data)
  //   setContent(data.results);
  // };

  useEffect(() => {
    window.scroll(0, 0);
    requestdata().then(data =>setData(data.data));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <span className="pageTitle">Trending Today</span>
     
      {/* { data
      ?
         data.map((car) => {
         return (
          <>
          <img src={car.thumbnail} alt={car.title} />
          <div>{car.title}</div>
          </>
         )
         
            
          })
          : "Loading.."
        } */}
      <SingleContent data={data} />
    </>
  );
};

export default TrendingCars;
