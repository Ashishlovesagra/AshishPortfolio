import {
  FaCode,
  FaCogs,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaServer,
  FaTachometerAlt,
  FaCloudUploadAlt,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";
import "../style/MyService.css";

function MyServices() {
  const services = [
    { icon: <FaCode />, title: "Full-Stack Development" },
    { icon: <FaLaptopCode />, title: "Custom Web Applications" },
    { icon: <FaCogs />, title: "API Development" },
    { icon: <FaDatabase />, title: "Database Design and Management" },
    { icon: <FaMobileAlt />, title: "Front-End Development" },
    { icon: <FaServer />, title: "Back-End Development" },
    { icon: <FaTachometerAlt />, title: "Responsive Design" },
    { icon: <FaRocket />, title: "Performance Optimization" },
    { icon: <FaCloudUploadAlt />, title: "Deployment and Hosting" },
    { icon: <FaTools />, title: "Maintenance and Support" },
    { icon: <FaLightbulb />, title: "Consultation and Strategy" },
  ];

  return (
    <>
      <div className="service-display-section section-gap-tb-165 pos-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-content">
                <span className="section-tag">My Services</span>
                <h2 className="section-title">
                  Service Provide For My Clients.
                </h2>
              </div>
              <div className="row">
                {services.map((service, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="service-box p-4 text-center h-100">
                      <div className="service-icon mb-3">{service.icon}</div>
                      <h4 className="service-title">{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyServices;
