import React from "react";

const Frame = () => {
  return (
    <div
      className="body  max-w-6xl ml-auto mr-auto"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/nrmkm7d/five-bells-washed-out-logo.png) , linear-gradient(to right, rgba(58, 61, 62, 1) 0%, rgba(58, 61, 62, 1) 100%);",
      }}
    >
      <div className="outer-border">
        <div className="mid-border">
          <div className="inner-border">
            <img
              className="corner-decoration corner-left-top"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="corner-decoration corner-right-top"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="corner-decoration corner-right-bottom"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="corner-decoration corner-left-bottom"
              src="../corner-decoration-new.png"
            ></img>
            <img
              className="vertical-decoration top"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
            ></img>
            <img
              className="vertical-decoration bottom"
              src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
            ></img>

            <div className="container">
              <div className="row">
                <div className="flex" style={{ height: "60vh" }}>
                  <img
                    src="../grunge-texture-12-1920x1080.jpg"
                    className="flex-1 object-cover"
                  />
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
