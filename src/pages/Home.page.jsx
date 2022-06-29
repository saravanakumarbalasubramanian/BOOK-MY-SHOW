import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
// config
import TempPosters from "../config/TempPosters.config"


const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-6">

        <div className="container mx-auto px-24 py-4">
          <h1 className="text-xl font-bold text-grey-800 my-3">The Best Of Entertainment</h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-grey-900 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider images={TempPosters}
              title="Premieres"
              subtitle="Brand New Release every friday" isDark/>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters}
          title="Online Streaming events"
          isDark={false}
         />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters}
          title="Outdoor events"
          isDark={false}
         />
      </div>
    </>
  );
};

export default HomePage;