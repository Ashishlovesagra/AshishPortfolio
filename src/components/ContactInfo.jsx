import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // TODO: Send formData to the server
      const response = await fetch("https://ashish-portfolio-backend-1cct.onrender.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Optionally reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error occurred during form submission:", error);
    }
  };

  return (
    <>
      <div className="contact-section section-gap-tb-165">
        <div className="contact-box pos-relative">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Start Map Area*/}
                <div className="map">
                  <div className="gmap-box">
                    <iframe
                      id="gmap_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.79425723582!2d77.8976107157563!3d27.17615042418906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706571876660!5m2!1sen!2sin"
                    ></iframe>
                  </div>
                </div>
                {/* End Map Area */}
              </div>
            </div>
            <div className="row flex-lg-row flex-column-reverse">
              <div className="col-lg-4">
                <div className="contact-sidebar-wapper">
                  <div className="contact-sidebar">
                    {/* Start Project Sidebar Item */}
                    <ul className="contact-sidebar-list-item">
                      {/* Start contact Single Box */}
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Phone:</h6>
                        <Link to="tel:+919911568866" className="link">
                          +91 9911568866
                        </Link>
                      </li>
                      {/* End contact Single Box */}
                      {/* Start contact Single Box */}
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Email:</h6>
                        <Link
                          to="mailto:ashishlovesagra@gmail.com"
                          className="link"
                        >
                          Ashishlovesagra@Gmail.com
                        </Link>
                      </li>
                      {/* End contact Single Box */}
                      {/* Start contact Single Box */}
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Website:</h6>
                        <Link
                          to="https://ashishsingh.site"
                          className="link"
                          target="_blank"
                        >
                          ashishsingh.site
                        </Link>
                      </li>
                      {/* End contact Single Box */}
                      {/* Start contact Single Box */}
                      <li className="contact-sidebar-single-box">
                        <h6 className="title-text">Address:</h6>
                        <span className="text">Agra, Uttar Pradesh, India</span>
                      </li>
                      {/* End contact Single Box */}
                    </ul>
                    {/* End Project Sidebar Item */}
                  </div>
                  {/* Start Sidebar Widget Single Item - Social Widgets */}
                  <div className="sidebar-widget-single-area ">
                    <h3 className="title">Follow Me</h3>
                    <ul className="social-link">
                      <li>
                        <Link to="https://www.linkedin.com/in/ashish-singh-10sep" target="_blank">
                          <FaLinkedinIn />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/singh.ashish1009?igsh=MXN6b21hMG00MWc4Ng==" target="_blank">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://twitter.com/SinghAshish009" target="_blank">
                          <FaTwitter />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* End Sidebar Widget Single Item - Social Widgets */}
                </div>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <div className="contact-form-wrapper section-mt-165">
                  {/* Start Section Content */}
                  <div className="content">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="title">
                      If you have any porject or need help. Contact me
                    </h2>
                  </div>
                  {/* End Section Content */}
                  {/* Start Contact Form Box */}
                  <div className="contact-form-box">
                    <form
                      id="contact-form"
                      className="default-form contact-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="row mb-n6">
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="name"
                              type="text"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="email"
                              type="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="phone"
                              type="tel"
                              placeholder="Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 mb-6">
                          <div className="default-form-group">
                            <input
                              name="subject"
                              type="text"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xl-12 mb-6">
                          <div className="default-form-group">
                            <textarea
                              name="message"
                              placeholder="Comment"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12 mb-6">
                          <div className="default-form-group text-center">
                            <button
                              type="submit"
                              className="btn btn-lg btn-outline-one"
                            >
                              Submit Message
                            </button>
                          </div>
                        </div>
                        {submitSuccess && (
                          <div className="col-12 mb-6">
                            <div className="default-form-group text-center">
                              <p className="form-success-message">
                                Form submitted successfully!
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                  {/* End Contact Form Box */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
