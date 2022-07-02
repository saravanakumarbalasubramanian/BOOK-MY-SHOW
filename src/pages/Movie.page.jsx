import {FaCcVisa , FaGooglePay} from "react-icons/fa"

// component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
// config
import TempPosters from "../config/TempPosters.config"

const Movie = () => {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
        <MovieHero/>
        <div className="container px-4  my-12 lg:ml-20 lg:w-2/3">
          <div className="flex flex-col items-start gap-3 ">
          <h2 className="text-grey-800 font-bold text-2xl">About the movie</h2>
        <p> Vikram, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse <br/> to confront a mysterious new adversary.</p>
          </div>
          <div className="my-8"><hr/></div>
         
         
          <div className="my-8">
             <h2 className="text-grey-800 font-bold text-2xl mb-4">Applicable offers</h2>
             
             <div className="flex flex-col gap-3 lg:flex-row">


             <div className="flex  items-start gap-2 bg-yellow-100 rounded-md p-3 border-2 border-yellow-400 border-dashed">
              <div className="w-8 h-8"> 
           <FaCcVisa className="w-full h-full"/>
              </div>
           <div className="flex flex-col items-start">
            <h3 className="text-grey-700 text-xl font-bold">Visa Stream Offer</h3>
            <p className="text-grey-600">
              Get 50% off up to INR 150 on all RuPay cards* on BookMyShow stream.
            </p>
           </div>
             </div>


             <div className="flex  items-start gap-2 bg-yellow-100 rounded-md p-3 border-2 border-yellow-400 border-dashed">
              <div className="w-8 h-8"> 
           <FaGooglePay className="w-full h-full"/>
              </div>
           <div className="flex flex-col items-start">
            <h3 className="text-grey-700 text-xl font-bold">Filmy Pass</h3>
            <p className="text-grey-600">
              Get Rs.75* off on 3 movies you buy/rent on Stream . Buy Filmy Pass @Rs.99
            </p>
           </div>
             </div>
 

             </div>
  
          </div>
 
          <div className="my-8"><hr/></div>

          <div className="my-8">
          <h2 className="text-grey-800 font-bold text-2xl mb-4">cast & crew</h2>
          <div className="flex flex-wrap gap-4">
            <Cast image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xm4jHj0W8TyHUmSnjpYr6Y14XB30tXo5NryS1PAUzg&s" 
            CastName="Suriya" 
            role="Actor"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-sethupathi-32355-16-09-2017-03-30-38.jpg" 
            CastName="Vijay Sethupathy" 
            role="Actor"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/fahadh-faasil-37756-24-03-2017-17-27-27.jpg" 
            CastName="Fahadf Faasil" 
            role="Actor"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kamal-haasan-2886-24-03-2017-17-54-38.jpg" 
            CastName="Kamal Haasan" 
            role="Actor"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/arjun-das-2010453-17-11-2020-01-15-26.jpg" 
            CastName="Arjun Das" 
            role="Actor"
            />
            <Cast image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/lokesh-kanakaraj-1065304-24-03-2017-16-24-31.jpg" 
            CastName="Lokesh Kanagaraj" 
            role="Director , Writer"
            />
          </div>
          </div>
          <div className="my-8"><hr/></div>
            <div className="my-8">
            <PosterSlider 
            config={settings}
            images={TempPosters}
              title="You Might Also Like"
              isDark={false}
             />
            </div>

            <div className="my-8"><hr/></div>
            <div className="my-8">
            <PosterSlider 
            config={settings}
            images={TempPosters}
              title="BMS XCLUSIVE"
              isDark={false}
             />
            </div>
        </div>
    </>
  );
};

export default Movie ;