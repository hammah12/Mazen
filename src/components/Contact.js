import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out to us.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: contact@mazendevelopment.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
