import React, { useEffect } from "react";
import "../Most-Popular-Detail/DetailPage.css";
import goa from "../MostPopularTour/goa.jpg";
import { Container, Grid, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import FlightIcon from "@mui/icons-material/Flight";
import Slider from "react-slick";
import goa1 from '../Most-Popular-Detail/goa1.jpg'
import goa2 from '../Most-Popular-Detail/goa2.jpg'
import goa3 from '../Most-Popular-Detail/goa3.jpg'
import goa5 from '../Most-Popular-Detail/goa5.jpg'

const MostPopularDetail = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="tripcard">
      <div className="heading">
        <h2>
          EXPLORE BESTSELLING DISCOVER GOA: A TROPICAL PARADISE OF BEACHES,
          CULTURE, AND ADVENTURE
        </h2>
      </div>
      <Container>
        <Grid container style={{ borderRadius: "1rem", overflow: "hidden" }}>
          <Grid item md={3}>
            <img src={goa} width={"100%"} style={{ height: "100%" }} alt="" />
          </Grid>
          <Grid item md={6} style={{ backgroundColor: "white" }}>
            <Typography
              className="card_center_content"
              style={{ lineHeight: "50px" }}
            >
              <Typography
                variant="h6"
                style={{ color: "rgb(197, 115, 8)", fontWeight: "600" }}
              >
                3N/4D North Goa Delight: Sun, Sand, and Fun Await!
              </Typography>
              <p>⭐⭐⭐⭐(63 User Rating)</p>
              <div className="destination">
                <p>
                  <b>Destinations:</b>
                </p>
                <p>3N - North Goa</p>
              </div>
              <div className="heighlights">
                <p>
                  <b>Highlights:</b>
                </p>
                <p className="desc">
                  Goa Airport - North Goa - South Goa - Airport (Note: Mentioned
                  Rates are valid till August 2024, September onward rate will
                  go high)
                </p>
              </div>
              <div className="icons">
                {/* hotel */}
                <div className="iconMain">
                  <div style={{ height: "30px" }}>
                    <HotelIcon style={{ color: "brown" }} />
                  </div>
                  <div>
                    <Typography class="iconName">Hotel</Typography>
                  </div>
                </div>

                {/* meal */}
                <div className="iconMain">
                  <div style={{ height: "30px" }}>
                    <RestaurantIcon style={{ color: "brown" }} />
                  </div>
                  <div>
                    <Typography class="iconName">Meal</Typography>
                  </div>
                </div>

                {/* transport */}
                <div className="iconMain">
                  <div style={{ height: "30px" }}>
                    <DirectionsCarFilledIcon style={{ color: "brown" }} />
                  </div>
                  <div>
                    <Typography class="iconName">Transport</Typography>
                  </div>
                </div>
                {/* mountain */}
                <div className="iconMain">
                  <div style={{ height: "30px" }}>
                    <FilterHdrIcon style={{ color: "brown" }} />
                  </div>
                  <div>
                    <Typography class="iconName">Sightseeing</Typography>
                  </div>
                </div>
                {/* flight */}
                <div className="iconMain">
                  <div style={{ height: "30px" }}>
                    <FlightIcon style={{ color: "brown" }} />
                  </div>
                  <div>
                    <Typography class="iconName">Flight</Typography>
                  </div>
                </div>
              </div>
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            style={{ backgroundColor: "rgb(21 98 56 / 15%)" }}
            className="lastCard"
          >
            <div>
              <Typography variant="h6">Select No. of Traveller</Typography>
            </div>
            <div className="number">
              <p className="counting">2</p>
              <p className="counting">4</p>
              <p className="counting">6</p>
            </div>
            <div className="price">
              <p style={{ fontWeight: "600", fontSize: "24px" }}>₹7899</p>
              <p>
                <del
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "gray",
                  }}
                >
                  ₹11899
                </del>
              </p>
            </div>
            <div className="off">34% Off</div>
            <Typography style={{ margin: "6px" }}>
              Per Person (Taxes extra)
            </Typography>
            <Typography>
              <button className="enquiry">Enquire Now</button>
            </Typography>
            <Typography>
              <button className="whatsapp">WhatsApp Us</button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <div className="heading">
          <span>5 Days Travel & Tour Services</span>
        </div>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <div
              style={{
                padding: "2rem",
                border: "1px solid #222",
                borderBottom: "10px solid #222",
                borderRadius: "2rem",
              }}
            >
              <b>Day01:</b> Arrival at airport and ahead toward the booked
              Hotel. Hop out for some cafes or beach shacks for dinner.
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div
              style={{
                padding: "2rem",
                border: "1px solid #222",
                borderBottom: "10px solid #222",
                borderRadius: "2rem",
              }}
            >
              <b>Day02:</b> Half day for North Goa Beaches (rambol / Morjim
              beaches) Second Half for Baga / Candolim where you can enjoy water
              sports like Paragliding, Banana Boat Ride, Water Scooter, etc.
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div
              style={{
                padding: "2rem",
                border: "1px solid #222",
                borderBottom: "10px solid #222",
                borderRadius: "2rem",
              }}
            >
              <b>Day03:</b>
              <b> Option A </b> - Historical places like churches, Museums,
              Temples which are in North Goa, and in the evening come down to
              your hotel.
              <br />
              <b>Option B</b> Explore some waterfalls (Harvalem Waterfalls)
              Explore beaches like Ashvem later you can party at some famous
              clubs.
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div
              style={{
                padding: "2rem",
                border: "1px solid #222",
                borderBottom: "10px solid #222",
                borderRadius: "2rem",
              }}
            >
              <b>Day 04:</b> Dudhsagar Waterfall
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div
              style={{
                padding: "2rem",
                border: "1px solid #222",
                borderBottom: "10px solid #222",
                borderRadius: "2rem",
              }}
            >
              <b>Day 05:</b> Relax your day and enjoy night life
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div
              style={{
                padding: "2rem",
                border: "1px solid #222",
                borderBottom: "10px solid #222",
                borderRadius: "2rem",
              }}
            >
              <b>Day 06:</b> Departure.
            </div>
          </Grid>
        </Grid>
        <div className="heading" style={{marginTop:'2rem'}}>
          <span>Goa Best Tours</span>
        </div>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img width="95%" height="100%" src={goa1} alt="" />
        </div>
        <div>
        <img width="95%" height="100%" src={goa2} alt="" />
        </div>
        <div>
        <img width="95%" height="100%" src={goa3} alt="" />
        </div>
        <div>
        <img width="95%" height="100%" src={goa5} alt="" />
        </div>
        <div>
        <img width="95%" height="100%" src={goa1} alt="" />
        </div>
        <div>
        <img width="95%" height="100%" src={goa2} alt="" />
        </div>
      </Slider>
    </div>
      </Container>
    </div>
  );
};

export default MostPopularDetail;
