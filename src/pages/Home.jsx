import React from "react";
import Header from "../components/Header";
import OverView from "../components/OverView";
import Transaction from "../components/Transaction";

const Home = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="">
        <Header />
        <OverView />
        <Transaction />
      </div>
    </div>
  );
};

export default Home;
