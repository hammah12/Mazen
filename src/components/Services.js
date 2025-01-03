import React from 'react';

function Services() {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <p>
        At Mazen Development, we offer a comprehensive range of services
        designed to meet the diverse needs of our clients. Our expertise spans
        across various domains of software development, ensuring that we can
        deliver high-quality, innovative solutions tailored to your specific
        requirements.
      </p>
      <div className="service">
        <h3>Web Design</h3>
        <p>
          Our web design services focus on creating visually appealing,
          user-friendly websites that provide an exceptional user experience. We
          combine aesthetics with functionality to ensure that your website not
          only looks great but also performs seamlessly across all devices.
        </p>
      </div>
      <div className="service">
        <h3>Web Development</h3>
        <p>
          We build robust, scalable web applications using the latest
          technologies and frameworks. Our web development services are tailored
          to meet your business objectives, whether you need a simple website or
          a complex web portal.
        </p>
      </div>
      <div className="service">
        <h3>E-commerce Solutions</h3>
        <p>
          Our e-commerce solutions are designed to help you establish and grow
          your online store. We provide end-to-end services, from setting up your
          e-commerce platform to integrating payment gateways and optimizing for
          conversions.
        </p>
      </div>
      <div className="service">
        <h3>Mobile App Development</h3>
        <p>
          We develop custom mobile applications for iOS and Android platforms.
          Our mobile app development services focus on creating intuitive,
          engaging apps that enhance user engagement and drive business growth.
        </p>
      </div>
      <div className="service">
        <h3>UI/UX Design</h3>
        <p>
          Our UI/UX design services are centered around creating intuitive and
          engaging user interfaces that enhance user satisfaction. We conduct
          thorough user research and usability testing to ensure that our designs
          meet the highest standards of usability and accessibility.
        </p>
      </div>
      {/* Add more services as needed */}
      <p>
        We are committed to delivering excellence in every project we undertake.
        Our team works closely with you to understand your needs and develop
        solutions that exceed your expectations. Contact us today to learn more
        about how we can help you achieve your digital goals.
      </p>
    </div>
  );
}

export default Services;
