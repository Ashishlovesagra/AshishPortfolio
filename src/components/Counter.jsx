import { useState, useEffect } from 'react';
import CounterupIcon2 from '../assets/CounterupIcon2.jpg';
import CounterupIcon3 from '../assets/CounterupIcon3.jpg';

const Counter = () => {
  const [projectCount, setProjectCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);

  useEffect(() => {
    const incrementProjectCount = setInterval(() => {
      setProjectCount(prevCount => {
        if (prevCount < 15) return prevCount + 1;
        clearInterval(incrementProjectCount);
        return prevCount;
      });
    }, 300); // Adjust the interval as needed for the animation speed

    const incrementExperienceCount = setInterval(() => {
      setExperienceCount(prevCount => {
        if (prevCount < 3) return prevCount + 1;
        clearInterval(incrementExperienceCount);
        return prevCount;
      });
    }, 200); // Adjust the interval as needed for the animation speed

    return () => {
      clearInterval(incrementProjectCount);
      clearInterval(incrementExperienceCount);
    };
  }, []);

  return (
    <div className="counter-display-section section-gap-tb-165 section-bg-2">
      <div className="counter-display-wrapper">
        <div className="container">
          <div className="row justify-content-center justify-content-sm-start">
            <div className="col-12 col-sm-4 col-md-6 d-flex justify-content-center">
              <div className="counterup-single-item">
                <div className="icon">
                  <img src={CounterupIcon2} alt="Project Complete" />
                </div>
                <div className="content">
                  <h2 className="number">
                    <span className="counter">{projectCount}</span>+
                  </h2>
                  <span className="text">Projects Complete</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 d-flex justify-content-center">
              <div className="counterup-single-item">
                <div className="icon">
                  <img src={CounterupIcon3} alt="Years of Experience" />
                </div>
                <div className="content">
                  <h2 className="number">
                    <span className="counter">{experienceCount}</span>+
                  </h2>
                  <span className="text">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
