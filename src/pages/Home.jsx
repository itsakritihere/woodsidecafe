import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-start">
              <h2 className="fs-4 text-white mb-3 fw-normal animated slideInDown">
                A PLACE TO UNWIND AND RELAX
              </h2>
              <h1 className="display-4 text-white mb-4 fw-bold text-uppercase tracking-wide animated slideInDown">
                WELCOME TO THE WOODSIDE CAFÉ
              </h1>
              <h2 className="fs-4 text-white mb-3 fw-normal animated slideInDown">
                EXPERIENCE COFFEE, COMFORT, AND CONVERSATION LIKE NEVER BEFORE.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/iot.png"
                  alt="Café"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">The Woodside Café</span>
              </h1>
              <p className="mb-4">
                The Woodside Café is where great coffee meets cozy vibes. Nestled in the heart of the city, 
                we serve freshly brewed coffee, artisanal pastries, and warm smiles every day.
              </p>
              <p className="mb-4">
                Whether you're looking to relax, work, or catch up with friends, 
                our café offers a peaceful escape with rustic interiors and aromatic blends.
              </p>
              <p className="mb-4">
                Founded with a passion for quality and community, 
                The Woodside Café brings together local flavors and heartfelt hospitality.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Freshly Brewed Coffee
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Artisanal Pastries & Treats
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Cozy Ambience
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Takeaway & Delivery
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Private Events & Catering
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Friendly Staff & Community Vibes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Specialties</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fas fa-coffee fa-3x text-primary mb-4" />
                  <h5>Freshly Brewed Coffee</h5>
                  <p>Handcrafted coffee made from premium beans for the perfect start to your day.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-utensils fa-3x text-primary mb-4" />
                  <h5>Breakfast & Brunch</h5>
                  <p>Enjoy wholesome meals and freshly baked pastries in a cozy setting.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-shopping-bag fa-3x text-primary mb-4" />
                  <h5>Takeaway & Delivery</h5>
                  <p>Order your favorite coffee and snacks anytime with our easy takeaway and delivery options.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-calendar-alt fa-3x text-primary mb-4" />
                  <h5>Events & Catering</h5>
                  <p>Host intimate gatherings, birthdays, and corporate events with our catering services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Highlights
            </h6>
            <h1 className="mb-5">Café Highlights</h1>
          </div>
        <div className="row g-3">
  <div className="col-lg-7 col-md-6">
    <div className="row g-3">
      <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
        <a className="position-relative d-block overflow-hidden" href="">
          <img className="img-fluid custom-img" src="assets/img/im2.jpg" alt="" />
          <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
            Cozy Corners for Everyone
          </div>
        </a>
      </div>

      <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
        <a className="position-relative d-block overflow-hidden" href="">
          <img className="img-fluid custom-img" src="assets/img/im4.jpg" alt="" />
          <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
            Freshly Baked Every Morning
          </div>
        </a>
      </div>

      <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
        <a className="position-relative d-block overflow-hidden" href="">
          <img className="img-fluid custom-img" src="assets/img/im6.jpg" alt="" />
          <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
            Sustainable & Locally Sourced
          </div>
        </a>
      </div>

      <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
        <a className="position-relative d-block overflow-hidden" href="">
          <img className="img-fluid custom-img" src="assets/img/im1.jpg" alt="" />
          <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
            Perfect Spot for Coffee Lovers
          </div>
        </a>
      </div>

      <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
        <a className="position-relative d-block overflow-hidden" href="">
          <img className="img-fluid custom-img" src="assets/img/im7.jpg" alt="" />
          <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
            Relax. Sip. Repeat.
          </div>
        </a>
      </div>
    </div>
  </div>

  <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s">
    <a className="position-relative d-block h-100 overflow-hidden" href="">
      <img
        className="img-fluid custom-img-tall position-absolute w-100 h-100"
        src="assets/img/im5.jpg"
        alt=""
        style={{ objectFit: "cover" }}
      />
      <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
        Warm Hospitality, Always
      </div>
    </a>
  </div>
</div>
    
        </div>
      </div>

      {/* Process Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Process
            </h6>
            <h1 className="mb-5">How We Brew Happiness</h1>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                  <i className="fa fa-mug-hot fa-3x text-white" />
                </div>
                <h5 className="mt-4">Step 1: Choose Your Brew</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Pick your favorite coffee or beverage from our curated menu.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                  <i className="fa fa-bread-slice fa-3x text-white" />
                </div>
                <h5 className="mt-4">Step 2: Pair It with a Treat</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Enjoy freshly baked pastries or light meals alongside your beverage.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                  <i className="fa fa-smile fa-3x text-white" />
                </div>
                <h5 className="mt-4">Step 3: Enjoy Every Sip</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Relax, chat, or work in a warm, welcoming environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contact
            </h6>
            <h1 className="mb-5 text-white">Get in Touch</h1>
            <p className="mb-4 text-white">
              Have a question, feedback, or just want to say hello? We’d love to hear from you! Drop us a message below.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows={5} placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
     
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <OwlCarousel
  className="owl-theme"
  loop
  margin={10}
  nav
  items={1}
  autoplay
>
  <div className="testimonial-item bg-white text-center border p-4">
    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
         src="assets/img/testimony3.jpg"
         style={{ width: 80, height: 80 }} />
    <h5 className="mb-0">Aryan Sharma</h5>
    <p>Bengaluru</p>
    <p className="mb-0">The place is my second home way from all the hustle.</p>
  </div>
  <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimony4.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">Jai Aggrawal</h5>
            <p>New Delhi</p>
            <p className="mt-2 mb-0">
            The place, the vibe is so wholesome.
          </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimony.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">Shreya Desai</h5>
            <p>Dehradun</p>
            <p className="mt-2 mb-0">
           The coffee here feels like home!
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/testimony1.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">Ankit Das</h5>
            <p>Pune</p>
            <p className="mt-2 mb-0">
            Best place to relax and enjoy freshly brewed coffee.
            </p>
          </div>
  {/* Add more items as needed */}
</OwlCarousel>
        </div>
      </div>
    </div>
  );
}
