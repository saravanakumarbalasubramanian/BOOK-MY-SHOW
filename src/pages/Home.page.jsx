import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
 return (
    <>
    <div className="container mx-auto px-24 py-4">
      <h1 className="text-xl font-bold text-grey-800 my-3">The Best Of Entertainment</h1>
    <EntertainmentCardSlider/>
    <Premier/>
    </div>
   
    </>
 );
};

export default HomePage ;