import React from "react";

const HowItWorks = () => {
  return (
    <>
    <div className="main_container">
      <h1>How It Works</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nobis ullam quaerat optio asperiores, facilis mollitia temporibus in maxime explicabo inventore molestiae, dolores debitis voluptate eum aliquam voluptatum pariatur. Illum!</p>
      </div>
      <div className="cont-d-flex">
      <div className="container_box">
        <div className="box_number">1</div>
        <div className="box_image"><img src={'/how-it-works-1.png'} style={{width:"88px"}}/></div>
        <div className="box_text">
          <h3>Grab Iconic Collectibles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
      </div>
      <div className="container_box">
        <div className="box_number">2</div>
        <div className="box_image"><img src={'/how-it-works-2.svg'}/></div>
        <div className="box_text">
          <h3>Unlock A-List Experiences</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
      </div>
      <div className="container_box">
        <div className="box_number">3</div>
        <div className="box_image"><img src={'/how-it-works-3.svg'}/></div>
        <div className="box_text">
          <h3>Join The Community</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
      </div>
      </div>
    
    </>
  );
};

export default HowItWorks;
