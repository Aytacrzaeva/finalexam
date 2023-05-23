import React from "react";
import "./Home.scss";
import Mycarousel from "../components/Mycarousel";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Helmet} from "react-helmet";


const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <Navbar/>
      <Mycarousel />
      <Section1/>
      <Section2/>
      <Footer/>
    </>
  );
};

export default Home;
