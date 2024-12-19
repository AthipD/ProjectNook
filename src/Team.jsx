import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team (พบกับทีมงาน)</h2>
          <p className="text-secondary"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4 className="">{d.name}</h4>
                      <p className="text-secondary">{d.job}</p>
                      <p className="text-secondary"> Tel. : {d.phone}</p>
                      
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
