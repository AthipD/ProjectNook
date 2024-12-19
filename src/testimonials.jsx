import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2 style={{color:"#fff"}}>What our clients say(สิ่งที่ลูกค้าของเราพูด) </h2>
          <h3 style={{color:"#fff"}}>(ใครคือลูกค้าของเราที่เคยจ้างเเละหน้าเชื่อถือ เช่น รีสอร์ท บริษัทต่างๆ งานบุญต่างๆ หารีวิวมาลง)  </h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
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
