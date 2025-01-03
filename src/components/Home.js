import React from 'react';

function HeroSection() {
  return (
    <div className="hero">
      <h1>Mazen Development: Crafting Digital Solutions</h1>
      <p>
        We build high-performance websites and applications that drive business
        growth.
      </p>
      <button>Get a Free Quote</button>
    </div>
  );
}

function AboutUsSection() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Concisely introduce Mazen Development and its mission. Highlight your
        team's skills and experience. Emphasize your values (e.g., client-centric
        approach, innovation, quality).
      </p>
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        <li>
          {/* Icon */}
          <h3>Web Design</h3>
          <p>Concise description</p>
        </li>
        <li>
          {/* Icon */}
          <h3>Web Development</h3>
          <p>Concise description</p>
        </li>
        {/* Add more services */}
      </ul>
    </div>
  );
}

function PortfolioSection() {
  return (
    <div className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="project">
        {/* Image */}
        <h3>Project Name</h3>
        <p>Brief description</p>
        {/* Link to project */}
      </div>
      {/* Add more projects */}
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial">
        <p>
          "Amazing work! Mazen Development exceeded our expectations." - Client
          Name, Company
        </p>
      </div>
      {/* Add more testimonials */}
    </div>
  );
}

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
