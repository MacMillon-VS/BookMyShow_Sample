import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Premier = (props) => {
  const settings = {
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    InitialSlide: 0
  };
  return (
      <>
      <div className="flex flex-col items-start gap-1 py-4">
        <h3 className={`text-xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>
          {props.title}
          </h3>
        <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>
          {props.subtitle}
          </p>
      </div>
        <Slider {...settings} >
        {props.PremierImages.map((image)=> (
          <Poster {...image} isDark={props.isDark}/>
        ))}
        </Slider>
      </>
  );
};

export default Premier;