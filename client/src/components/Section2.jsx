import React, { useEffect, useState } from "react";
import "./Section2.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Section2 = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [dummys, setDummy] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/add").then((res) => {
      setData(res.data);
    });
  }, [searchValue === "", dummys]);

  return (
    <div className="section2">
      <div className="section2__header">
        <h3>WAITING CHILDREN</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus, soluta sit quam minima expedita atque
          corrupti reiciendis.
        </p>
        <button>Find More Waiting Children</button>
      </div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => {
          setSearchValue(e.target.value);
          setData(data.filter((item) => item.name.includes(searchValue)));
        }}
      />
      <button
        onClick={() => {
          setData([...data.sort((a, b) => b.age - a.age)]);
        }}
      >
        Sort By Price
      </button>
      <div className="container">
        <div className="section2__body">
          {data.map((item, index) => {
            return (
              <div className="section2__card" key={index}>
                <div className="section2__card__img">
                  <img
                    src="https://preview.colorlib.com/theme/adopted/img/children_1.jpg"
                    alt=""
                  />
                </div>
                    <h3>{item.name}</h3>
                    <p>{item.age} yrs. old</p>
                <div className="section2__card__text">
                  <Link to={`/${item._id}`}>Go detail
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      axios
                        .delete(`http://localhost:8080/add/${item._id}`)
                        .then((res) => {
                          setDummy(true);
                        });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
