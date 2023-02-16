import React from "react";
import "./Hows.css";

const Hows = () => {
  return (
    <div className="hows">
      <div className="hows-wrap">
        <div className="hows-head-text">
          <p>How it works</p>
          <h1 className="hows-head-text-h1">
            
            A step by step guide
            <br /> Your 24/7 online clinic
          </h1>
        </div>
        <div className="hows-imgAndText-wrap">
          <div className="hows-head-text-wrap">
            <div className="hows-head-text-wrap-header">
              <p>Step 1</p>
              <h3>Answer a few questions</h3>
            </div>

            <div>
              <p className="hows-head-p">
                We guide you through questions online that are straightforward
                and easy to answer. We'll ask about your symptoms, medications
                and allergies too.
              </p>
            </div>
          </div>
          <div className="hows-img-holder">
            <img className="hows-img" src="/hold.png" />
          </div>
        </div>

        <div className="hows-imgAndText-wrap">
          <div className="hows-img-holder">
            <img className="hows-img" src="/notes.png" />
          </div>
          <div className="hows-head-text-wrap">
            <div className="hows-head-text-wrap-header">
              <p>Step 2</p>
              <h3>Diagnosis by real doctors,<br/> real fast.</h3>
            </div>

            <div>
              <p className="hows-head-p">
                Board-certified Medical Practitioners review your answers right away. They make the diagnosis, and recommend the care you'll need. If prescriptions or physical meetings are in the plan, they'll send you to your favorite pharmacy or set up a meeting with you. 
              </p>
            </div>
          </div>
        </div>

        <div className="hows-imgAndText-wrap">
          <div className="hows-head-text-wrap">
            <div className="hows-head-text-wrap-header">
              <p>Step 3</p>
              <h3>Payments</h3>
            </div>

            <div>
              <p className="hows-head-p">
                Using <a>Korapay</a> payments platform, it is now easy to make payments.
                Just enter your credit card and any other information that might be needed and you've made your payment!
              </p>
            </div>
          </div>
          <div className="hows-img-holder">
            <img className="hows-img" src="/pay.png" />
          </div>
        </div>

        <div className="hows-imgAndText-wrap">
          <div className="hows-img-holder">
            <img className="hows-img" src="/listening.png" />
          </div>
          <div className="hows-head-text-wrap">
            <div className="hows-head-text-wrap-header">
              <p>Step 4</p>
              <h3>Start feeling better!</h3>
            </div>

            <div>
              <p className="hows-head-p">
                Thats all in just little time. And you're up and on your feet, running.
                Questions? The doctor is available to help. Follow up is key!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hows;
