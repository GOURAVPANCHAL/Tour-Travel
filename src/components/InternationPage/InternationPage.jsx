import React, { useEffect } from 'react'
import './InternationPage.css'

import bali from './BALI.webp'
import dubai from './dubai.jpg'
import maldvies from './MALDVIES.jpg'
import singapore from './SINGAPORE.jpg'
import thailand from './THAILAND.jpg'

function InternationPage() {
    useEffect(()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    },[])
    return (
        <section className='hotel-page-section'>
            <div className="internation-bg">

            </div>
            <div className="hotel-container">
                <div className="hotal-detail domestic">
                    <span>INTERNATIONAL TOUR PACKAGES</span>
                    <p>Embark on an extraordinary global adventure with TripJar's curated
                        international tour packages! Discover captivating destinations, immerse in
                        diverse cultures, and create timeless memories. Whether it's exploring
                        ancient wonders in Bali, experiencing the bustling streets of Thailand, or
                        relaxing on the pristine beaches of the Maldives, our diverse offerings cater to
                        every traveler's dream.</p>
                    <p>With meticulously crafted packages and dedicated travel experts, your
                        journey is guaranteed to be seamless and unforgettable. From luxurious
                        accommodations to immersive experiences, we ensure that every detail is
                        carefully planned. Pack your bags, expand your horizons, and let the
                        adventure begin!
                    </p>
                    <p>At TripJar, we understand that travel is more than just visiting new places; it's
                        about connecting with the world and creating meaningful experiences. That's
                        why we're committed to responsible tourism practices and sustainable
                        travel initiatives. Join us in exploring the world while leaving a positive impact
                        on the destinations we visit. Let's embark on a journey of discovery and make
                        memories that will last a lifetime!
                    </p>
                    <p>#InternationalTravel #DiscoverTheWorld 🌍✈️�</p>
                </div>

                <div className="domestic-service-row">
                    <div className="col">
                        <div className="img">
                            <img src={dubai} alt="" />
                        </div>
                        <div className="info">
                            <span>DUBAI</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={thailand} alt="" />
                        </div>
                        <div className="info">
                            <span>THAILAND</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={bali} alt="" />
                        </div>
                        <div className="info">
                            <span>BALI</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={singapore} alt="" />
                        </div>
                        <div className="info">
                            <span>SINGAPORE</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img">
                            <img src={maldvies} alt="" />
                        </div>
                        <div className="info">
                            <span>MALDVIES</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default InternationPage
