import React from 'react'
import Navbar from '../../components/Navbar'
import HeroImg from '../../assets/images/hero-img.png'
import Footer from '../../components/Footer'

const LandingPage = () => {

    return (
        <>
            <Navbar />
            <div>
                <section className="hero">
                <div className="hero-left">
                    <h1>Better Solutions For Your <br /> Business</h1>
                    <p>We are team of talented designers making websites with <br /> Bootstrap</p>
                    <button className="btnn btn-actived" >Get Started</button>
                    <button className="btnn">Watch Video</button>
                </div>
                <div className="hero-right">
                    <img src={HeroImg} alt="hero-img.png" />
                </div>
                </section>
                <section className="newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <input type="text" />
                <button className="btnn btn-actived btn-newsletter">Subscribe</button>
                </section>
                <section className="information">
                <div className="information-address">
                    <h2>Arsha</h2>
                    <p>A108 Adam Street <br />
                    New York, NY 535022 <br />
                    United States <br /><br />
                    Phone: +1 5589 55488 55 <br />
                    Email: info@example.com
                    </p>
                </div>
                <div className="information-links">
                    <h5>Useful Links</h5>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">Terms of service</a>
                    <a href="#">Privacy policy</a>
                </div>
                <div className="information-service">
                    <h5>Our Services</h5>
                    <a href="#">Web Design</a>
                    <a href="#">Web Development</a>
                    <a href="#">Product Management</a>
                    <a href="#">Marketing</a>
                    <a href="#">Graphic Design</a>
                </div>
                <div className="information-social">
                    <h5>Our Social Networks</h5>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <button>a</button>
                    <button>a</button>
                    <button>a</button>
                    <button>a</button>
                    <button>a</button>
                </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage