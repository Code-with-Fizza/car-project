import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../Config/config.js";
import "./SingleContent.css";
// import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({data}) => {
  return (
    <>
      <div className="container-fluid mt-20">
        <div
          className=" row text-center"
          style={{ marginRight: "-137px", marginLeft: "-111px" }}
        >
          {/* *******Display Card Component***** */}

          {data
            ? data.map((car) => {
                return (
                  <>
                    {/* <img src={car.thumbnail} alt={car.title} /> */}
                    {/* <div>{car.title}</div> */}

                    <div className="col-10 col-md-4 mt-10">
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

          {/* **********another card***** */}

        </div>
      </div>
    </>
  );
};

export default SingleContent;
