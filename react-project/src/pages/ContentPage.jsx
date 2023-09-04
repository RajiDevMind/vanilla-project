import React, { useState } from "react";
import iootz3 from "../assets/ioootz-3.jpg";
import iootz1 from "../assets/vr-iootz.jpg";

const ContentPage = () => {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  let updateImg = () => {
    if (currentSlide > next.length) {
      return (currentSlide = 1);
    } else if (currentSlide < 1) {
      currentSlide = prev.length;
    }
  };

  let currentSlide = 1;
  const handleClick = () => {
    setNext(!next) || setPrev(!prev);
    updateImg();
  };

  updateImg();

  return (
    <>
      <div className="page">
        <div className="page-text-container">
          <h1 className="page-first-h1tag">Go Smart with it & Ot devices</h1>
          <p className="page-first-ptag">
            <span className="page-span-1">
              FIRST P-TAG Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi in voluptatem maxime. Veritatis molestias repellat,
              corrupti placeat inventore nihil assumenda officiis! Excepturi
              corrupti magni obcaecati distinctio, assumenda expedita. Qui,
              magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi in voluptatem maxime. Veritatis molestias repellat, corrupti
              placeat inventore nihil assumenda officiis! Excepturi corrupti
              magni obcaecati distinctio, assumenda expedita. Qui, magni.
            </span>
          </p>
          <p className="page-sec-ptag">
            <span className="page-span-2">
              FIRST P-TAG Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi in voluptatem maxime. Veritatis molestias repellat,
              corrupti placeat inventore nihil assumenda officiis! Excepturi
              corrupti magni obcaecati distinctio, assumenda expedita. Qui,
              magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi in voluptatem maxime. Veritatis molestias repellat, corrupti
              placeat inventore nihil assumenda officiis! Excepturi corrupti
              magni obcaecati distinctio, assumenda expedita. Qui, magni.
            </span>
          </p>
          <p className="page-third-ptag">
            <span className="page-span-3">
              FIRST P-TAG Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi in voluptatem maxime. Veritatis molestias repellat,
              corrupti placeat inventore nihil assumenda officiis! Excepturi
              corrupti magni obcaecati distinctio, assumenda expedita. Qui,
              magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi in voluptatem maxime. Veritatis molestias repellat, corrupti
              placeat inventore nihil assumenda officiis! Excepturi corrupti
              magni obcaecati distinctio, assumenda expedita. Qui, magni.
            </span>
          </p>
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="image-slider">
              <div
                className={`icon-container ${
                  next ?? prev ? "transformed" : ""
                }`}
              >
                <img className="imgslider" src={iootz3} alt="image" />

                <img className="imgslider" src={iootz1} alt="image" />
              </div>
              <i
                className="fa-solid fa-angles-left btn prev"
                onClick={handleClick}
              ></i>

              <i
                className="fa-solid fa-angles-right btn next"
                onClick={handleClick}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
