import React , {useEffect, useState}from 'react'
import { Container } from 'reactstrap';
import "./dropdowm.css"
import axios from "axios";
const DropDown = () => {
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
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <div className="row mb-3">
              <div className="form-group col-md-4">
                <label className="title">Model</label>
                <select
                  name="country"
                  className="form-control"
                  //   onChange={(e) => handledetails(e)}
                >
                  <option>--Select Model--</option>
                  {data
                    ? data.map((getcon) => {
                        return (
                          <>
                            <option
                              key={getcon.details.model}
                              value={getcon.details.model}
                            >
                              {" "}
                              {getcon.details.model}
                            </option>
                          </>
                        );
                      })
                    : "Loading.."}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label className="title">Make</label>
                <select name="state" className="form-control">
                  <option>--Select Make--</option>
                  {data
                    ? data.map((getcon) => {
                        return (
                          <>
                            <option
                              key={getcon.details.make}
                              value={getcon.details.make}
                            >
                              {" "}
                              {getcon.details.make}
                            </option>
                          </>
                        );
                      })
                    : "Loading.."}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label className="title">Year</label>
                <select name="state" className="form-control">
                  <option>--Select Year--</option>
                  {data
                    ? data.map((getcon) => {
                        return (
                          <>
                            <option
                              key={getcon.details.year}
                              value={getcon.details.year}
                            >
                              {" "}
                              {getcon.details.year}
                            </option>
                          </>
                        );
                      })
                    : "Loading.."}
                </select>
              </div>

              {/* <div className="form-group col-md-2 mt-4">
                <button className="btn btn-success mt-2">Submit</button>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default DropDown