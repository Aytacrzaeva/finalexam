import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Detail.scss";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/add/${id}`).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <Navbar />
      <div className="detail">
        <div className="detail__img">
          <img
            src="https://preview.colorlib.com/theme/adopted/img/children_1.jpg"
            alt=""
          />
        </div>
        <div className="detail__items">
          <h1>{data.name}</h1>
          <p>{data.age} yrs. old</p>
          <p>{data.detail}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
