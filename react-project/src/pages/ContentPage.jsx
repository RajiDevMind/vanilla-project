import React from "react";
import bulb from "../assets/bulb-iot.jpg";
import iootz2 from "../assets/ioootz-2.jpg";
import iootz3 from "../assets/ioootz-3.jpg";
import iootz1 from "../assets/vr-iootz.jpg";

const ContentPage = () => {
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
        <div className="wrapper">
          <div>
            <img src={iootz3} alt="" />
          </div>
          <div>
            <img src={iootz1} alt="" />
          </div>
          <div>
            <img src={iootz2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
