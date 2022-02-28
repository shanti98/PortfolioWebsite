import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
            <a href="https://www.facebook.com/shan.patel.359/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/shanti_bharsadiya/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/shanti-bharsadiya/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/shanti98/">
              <i className="fa fa-github"></i>
            </a>

            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Shanti</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Graduate Developer",
                    1000,
                    "Avid Learner",
                    1000,
                    "JavaScript,REACT,AWS",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of blilding applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me{""}</button>
            <a href="Shanti_Bharsadiya_Resume.pdf" download='Shanti_Bharsadiya_Resume.pdf'>
            <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
        <div className='profile-picture-background'>
            </div>
        </div>
      </div>
    </div>
  );
}
