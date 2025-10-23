import React from 'react'

function Services() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Services
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
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
            <h1 className="mb-5">Our Café Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fas fa-coffee fa-3x text-primary mb-4" />
                  <h5>Freshly Brewed Coffee</h5>
                  <p>
                    Enjoy aromatic, freshly brewed coffee made from premium beans.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-utensils fa-3x text-primary mb-4" />
                  <h5>Delicious Snacks & Pastries</h5>
                  <p>
                    Savor freshly baked pastries and healthy snacks every morning.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-chalkboard-teacher fa-3x text-primary mb-4" />
                  <h5>Barista Workshops</h5>
                  <p>
                    Learn the art of coffee-making with our interactive barista sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-mug-hot fa-3x text-primary mb-4" />
                  <h5>Custom Beverages</h5>
                  <p>
                    Personalize your coffee or tea with our range of flavors and toppings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-wifi fa-3x text-primary mb-4" />
                  <h5>Free Wi-Fi & Cozy Ambience</h5>
                  <p>
                    Relax and work comfortably in our warm and welcoming café environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-calendar-alt fa-3x text-primary mb-4" />
                  <h5>Event Hosting</h5>
                  <p>
                    Host small gatherings, book clubs, or meetups with a unique café experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-leaf fa-3x text-primary mb-4" />
                  <h5>Organic & Locally Sourced</h5>
                  <p>
                    We prioritize fresh, local, and organic ingredients in all our offerings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-gift fa-3x text-primary mb-4" />
                  <h5>Gift Cards & Loyalty Program</h5>
                  <p>
                    Treat your loved ones or enjoy perks with our exclusive loyalty program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">What Our Guests Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Alice Smith</h5>
              <p>London, UK</p>
              <p className="mb-0">
                Cozy ambiance, amazing coffee, and friendly staff. A must-visit café!
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Mark Johnson</h5>
              <p>New York, USA</p>
              <p className="mb-0">
                Fresh pastries and a great spot to work or relax. Highly recommended!
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Emily Davis</h5>
              <p>Sydney, Australia</p>
              <p className="mb-0">
                The barista workshop was fun and informative. Coffee tastes amazing!
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">Liam Brown</h5>
              <p>Toronto, Canada</p>
              <p className="mb-0">
                Friendly staff, cozy interiors, and the best coffee in town.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial */}
    </div>
  )
}

export default Services
