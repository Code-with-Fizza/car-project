import React, { useState } from "react";
import axios from "axios";
import DropDown from "./DropDown";
const SearchCars = () => {
  const handleChange = (event) => {
    const car = event.target.value;
    setcars(car);
  };
  const [searchTerm, setSearchTerm] = useState("");
   const [data, setData] = useState([]);
  const [cars, setcars] = useState({ items: [] });
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // const [result , setResult] = useState([]);
  //     const [apikey, setApiKey] = useState("AIzaSyCk-AYMHq6QW2rp8-SPjHBYsxZJ03OPSTc");

  //     const handleChange =(event)=>{
  //  const book = event.target.value;
  //  setBook(book)
  //     }
  let API_URL = `https://www.dubicars.com/api/dev-test`;
  const btnstyle = { marginLeft: "1400px", FontSize: "large" };
  const fetchCars = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setData(result.data.data);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call fetch books async function
    fetchCars();
    
  };

  

 


  return (
    <>
      <span className="pageTitle">Search Cars</span>
      <div className="container">
       < DropDown/>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              className="form-control mt-10"
              placeholder="Serach for books"
              autoComplete="off"
              value={searchTerm}
              onChange={onInputChange}
            />
          </div>
          <button class="btn btn btn-primary" type="submit">
            Search
          </button>
          <img src="../images/bg2.png" alt="" />
        </form>
        {data
          ? data.map((car, index) => {
              return (
                <>
                  <div display="flex" className="col-10 col-md-4 mt-10">
                    <div className="card p-2">
                      <div className="d-flex align-items-center">
                        <div className="image">
                          {" "}
                          <img
                            className="carimg"
                            src={car.thumbnail}
                            alt={car.title}
                            // className="rounded"
                            width="155"
                          />{" "}
                        </div>
                        <div className="ml-3 w-100">
                          <h4 className="mb-0 mt-0 textLeft">
                            {car.details.make}
                          </h4>
                          {/* <span className="text-left">{type }</span> */}
                          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column">
                              <span className="articles">Status</span>{" "}
                              <span className="number1">{car.status}</span>{" "}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="followers">Make</span>{" "}
                              <span className="number2">
                                {car.details.make}
                              </span>{" "}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="rating">Year</span>{" "}
                              <span className="number3">
                                {car.details.year}
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : "Loading.."}
        {/* </ul> */}
      </div>
    </>
  );
};

export default SearchCars;

