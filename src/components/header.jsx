import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <h2>ในราคาบ้านๆ..!!!</h2>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
