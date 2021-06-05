import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Frame = () => {
  return (
    <div className="body  max-w-6xl ml-auto mr-auto">
      <div className="outer-border">
        <div className="mid-border">
          <div className="inner-border ">
            <img
              className="corner-decoration corner-left-top z-50"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="corner-decoration corner-right-top z-50"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="corner-decoration corner-right-bottom z-50"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="corner-decoration corner-left-bottom z-50"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="vertical-decoration top z-50"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
            ></img>
            <img
              className="vertical-decoration bottom z-50"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
            ></img>

            <div className="container">
              <div className="row">
                <div className="flex" style={{}}>
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    swipeable={true}
                    dynamicHeight={false}
                    emulateTouch={false}
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop
                    className=" overflow-hidden"
                  >
                    <div>
                      <img src="../images-squoosh/IMG_1119.jpg" />
                    </div>
                    <div>
                      <img src="../images-squoosh/IMG_1117.jpg" />
                    </div>
                    <div>
                      <img src="../images-squoosh/IMG_1118.jpg" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
