import React from "react";
import "./MostPopularTour.css";
import goa from "./goa.jpg";
import ayodhya from "./ayodhya.jpg";
import buddhist from "./buddhist2.webp";
import himachal from "./himachal.jpg";
import gujarat from "./gujarat.jpg";
import indiagate from "./indiagate.avif";
import { Link } from "react-router-dom";

function MostPopularTour() {
  const Package = [
    {
      id: 1,
      image: goa,
      packageName: "GOA TOUR PACKAGE",
    },
    {
      id: 2,
      image: ayodhya,
      packageName: "GOA TOUR PACKAGE",
    },
    {
      id: 3,
      image: buddhist,
      packageName: "GOA TOUR PACKAGE",
    },
    {
      id: 4,
      image: himachal,
      packageName: "GOA TOUR PACKAGE",
    },
    {
      id: 5,
      image: gujarat,
      packageName: "GOA TOUR PACKAGE",
    },
    {
      id: 6,
      image: indiagate,
      packageName: "GOA TOUR PACKAGE",
    },
  ];

  return (
    <section className="mostpopular-section">
      <div className="popular-container">
        <div className="heading">
          <h2>
            TAKE A LOOK AT OUR <span>MOST POPULAR</span> TOURS
          </h2>
        </div>
        <div className="main-container">
          {Package.map((item, index) => (
              <div className="col">
                <Link to="/Our-Tour-Package-Detail">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="info">
                <span>{item.packageName}</span>
              </div>
                </Link>
            </div>
          ))}
          {/* <div className="col">
            <div className="img">
              <img src={goa} alt="" />
            </div>
            <div className="info">
              <span>GOA TOUR PACKAGE</span>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src={ayodhya} alt="" />
            </div>
            <div className="info">
              <span>AYODHYA TOUR PACKAGE</span>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src={buddhist} alt="" />
            </div>
            <div className="info">
              <span>BUDDHIST TOUR PACKAGE</span>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src={himachal} alt="" />
            </div>
            <div className="info">
              <span>HIMACHAL PARDESH TOUR PACKAGE</span>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src={gujarat} alt="" />
            </div>
            <div className="info">
              <span>GUJARAT TOUR PACKAGE</span>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src={indiagate} alt="" />
            </div>
            <div className="info">
              <span>DELHI TOUR PACKAGE</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default MostPopularTour;
