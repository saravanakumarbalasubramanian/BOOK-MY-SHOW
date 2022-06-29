import React from "react";
import Slider from "react-slick";
const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-full h-30 px-2">
                <img
                    className="w-full h-full"
                    src={props.src}
                    alt="entertainment image"
                />
            </div>
        </>
    );
};
const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/food-n-drinks-collection-202010061250.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTYwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshops-collection-202007231330.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202011150107.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/fitness-collection-2020081150.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202007220710.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/self-improvement-collection-202007220710.png",
    ];

    const settings = {
        infinity:false,
        autoplay:false,
        slideToShow:4,
        slideToScroll:4,
        responsive:[
            {
             breakpoints: 1024,
             settings:{
                slideToShow:3,
                slideToScroll:2,
                infinite:true,
             },
            
        },
        {
            breakpoints: 600,
            settings:{
               slideToShow:2,
               slideToScroll:1,
               initialSlide:1,
        },
    },
    {
        breakpoints: 480,
        settings:{
           slideToShow:2,
           slideToScroll:1,
    },
},
    ],
    
    };
    return (
        <>
<Slider {...settings}>
    {EntertainmentImage.map((image) => (
        <EntertainmentCard src={image}/>
    ))}

</Slider>
        </>
    );
};

export default EntertainmentCardSlider ;
