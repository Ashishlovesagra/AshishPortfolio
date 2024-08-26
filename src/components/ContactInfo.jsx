import { useState } from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const CONTACT_FORM_KEY = "contactFormLastSubmission";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const lastSubmissionTime = localStorage.getItem(CONTACT_FORM_KEY);
    const now = new Date().getTime();

    if (lastSubmissionTime && now - lastSubmissionTime < 30 * 60 * 1000) {
      // Less than 30 minutes since last submission
      setSubmissionMessage("You can only submit the form once every 30 minutes.");
      return;
    }

    try {
      const response = await fetch("https://ashish-portfolio-backend-1cct.onrender.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionMessage("Your message has been sent successfully!");
        localStorage.setItem(CONTACT_FORM_KEY, now.toString());

        // Optionally reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmissionMessage("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error occurred during form submission:", error);
      setSubmissionMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-section section-gap-tb-165">
      <div className="contact-box pos-relative">
        <div className="container">
          <div className="row">
            {/* Google Map Area */}
            <div className="col-12">
              <div className="map">
                <div className="gmap-box">
                  <iframe
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.79425723582!2d77.8976107157563!3d27.17615042418906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706571876660!5m2!1sen!2sin"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-lg-row flex-column-reverse">
            {/* Contact Sidebar */}
            <div className="col-lg-4">
              <div className="contact-sidebar-wapper">
                <div className="contact-sidebar">
                  <ul className="contact-sidebar-list-item">
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Phone:</h6>
                      <Link to="tel:+919911568866" className="link">+91 9911568866</Link>
                    </li>
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Email:</h6>
                      <Link to="mailto:ashishsingh2k18@gmail.com" className="link">ashishsingh2k18@gmail.com</Link>
                    </li>
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Website:</h6>
                      <Link to="https://ashishsingh.site" className="link" target="_blank">ashishsingh.site</Link>
                    </li>
                    <li className="contact-sidebar-single-box">
                      <h6 className="title-text">Address:</h6>
                      <span className="text">Agra, Uttar Pradesh, India</span>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget-single-area">
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
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-7 offset-lg-1">
              <div className="contact-form-wrapper section-mt-165">
                <div className="content">
                  <span className="section-tag">Get In Touch</span>
                  <h2 className="title">Have a project or need assistance? Contact me!</h2>
                </div>
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
                            placeholder="Message"
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
                      {submissionMessage && (
                        <div className="col-12 mb-6">
                          <div className="default-form-group text-center">
                            <p className="form-message">{submissionMessage}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
