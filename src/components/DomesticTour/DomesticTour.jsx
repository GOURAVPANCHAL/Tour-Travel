import React, { useEffect } from 'react'
import './DomesticTour.css'
import jim from './jim.webp'
import andaman from './ANDAMAN.avif'
import himachal from './himachal.webp'
import kashmir from './KASHMIR.jpg'
import kerala from './kerala.jpg'
import rajasthan from './RAJASTHAN.jpg'
import sikhim from './sikhim.jpg'
import uttarakhand from './uttarakhand.avif'
import goa from './goa.jpg'

function DomesticTour() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    },[])
    return (
        <section className='hotel-page-section'>
            <div className="domestic-bg">

            </div>
            <div className="hotel-container">
                <div className="hotal-detail domestic">
                    <span>DOMESTIC TOUR PACKAGES</span>
                    <p>Embark on an unforgettable journey through your own country with TripJar's
                        meticulously curated domestic packages! Our team of travel enthusiasts has
                        scoured every corner of the nation to bring you the most immersive and
                        memorable experiences. Discover hidden gems off the beaten path, immerse
                        yourself in the rich tapestry of local culture, and create lasting memories that
                        will stay with you long after you return home. From the majestic peaks of the
                        mountains to the sun-kissed shores of our pristine beaches, and everything
                        in between, our diverse range of destinations promises something special for
                        every type of traveler.</p>
                    <p>With expertly crafted itineraries tailored to your preferences and the
                        guidance of our dedicated travel experts, your journey with TripJar will be
                        nothing short of extraordinary. So pack your bags, grab your camera, and let
                        the adventure begin! 🌄🏝�</p>
                    <p>#DomesticTravel #ExploreYourCountry #TripJarAdventures</p>
                </div>

                <div className="domestic-service-row">
                    <div className="col">
                        <div className="img">
                            <img src={jim} alt="" />
                        </div>
                        <div className="info">
                            <span>JIM CORBETT</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={goa} alt="" />
                        </div>
                        <div className="info">
                            <span>GOA</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={kerala} alt="" />
                        </div>
                        <div className="info">
                            <span>KERALA</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={uttarakhand} alt="" />
                        </div>
                        <div className="info">
                            <span>UTTARAKHAND</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={himachal} alt="" />
                        </div>
                        <div className="info">
                            <span>HIMACHAL</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={sikhim} alt="" />
                        </div>
                        <div className="info">
                            <span>SIKKIM</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={andaman} alt="" />
                        </div>
                        <div className="info">
                            <span>ANDAMAN AND NICOBAR</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={kashmir} alt="" />
                        </div>
                        <div className="info">
                            <span>KASHMIR</span>
                        </div>
                    </div>
                        <div className="col">
                            <div className="img">
                                <img src={rajasthan} alt="" />
                            </div>
                            <div className="info">
                                <span>RAJASTHAN</span>
                            </div>
                        </div>
                </div>

                {/* <div className="hotel-service-container">
                    <div className="heading">
                        <h4>OUR SERVICES</h4>
                        <h3> <span>SERVICES</span></h3>
                    </div>
                    <div className="main-container">
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-tv"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Entertainment</h2>
                            </div>
                            <p>Passengers are looking for expanded in-flight entertainment option.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="ri-restaurant-line"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Meals</h2>
                            </div>
                            <p>Many airlines have reduced or eliminated food services</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-wifi"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Wi-Fi</h2>
                            </div>
                            <p>Highest on many passengers’ wish list is reliable, uninterrupted Wi-Fi service.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="ri-armchair-fill"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Comfort</h2>
                            </div>
                            <p>Seat comfort rarely seems to improve on planes.</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-broom"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Cleanliness</h2>
                            </div>
                            <p>While airlines have cut expenses every way possible</p>
                        </div>
                        <div className="same-box">
                            <div className="icon">
                                <div className="icon2">
                                    <i class="fa-solid fa-dumbbell"></i>
                                </div>
                            </div>
                            <div className="heading">
                                <h2>Efficiency</h2>
                            </div>
                            <p>Travellers want service efficiency in every aspect of their air travel.</p>
                        </div>
                    </div>
                </div> */}
            </div>


        </section>
    )
}

export default DomesticTour
