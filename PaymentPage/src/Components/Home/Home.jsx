import React from "react";
import Form from "../InputForm/Form";
import firstImg from '../../assets/BookIcon.svg'
import secondImg from '../../assets/DurationIcon.svg';
import thirdImg from '../../assets/LiveIcon.svg';
import forthImg from '../../assets/CapIcon.svg';
import fifthImg from '../../assets/ClockIcon.svg';

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Hero_section">
        <div className="Hero_left">
          <div className="Hero_left_text">
            Access curated courses worth
            <br />₹ <span className="Actual_Price">18,500</span> at just{" "}
            <span className="Discount_Price">₹ 99</span> per year!
            <div className="Features">
               <h4><img src={firstImg} alt="img" /> <span className="Features_text_color"> 100+ </span> job relevent courses</h4>
               <h4><img src={secondImg} alt="img" /> <span className="Features_text_color"> 20,000+ </span> Hours of content</h4>
               <h4><img src={thirdImg} alt="img" /> <span className="Features_text_color">Exclusive </span> webinar access</h4>
               <h4><img src={forthImg} alt="img" /> Scholarship worth <span className="Features_text_color"> ₹94, 500 </span></h4>
               <h4><img src={fifthImg} alt="img" /> <span className="Features_text_color"> Ad free </span> learning experience</h4>
            
            </div>
          </div>
        </div>

        <div className="Hero_right">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
