import React, { useEffect } from "react";

export const About = (props) => {
  useEffect(() => {
    // เลือกองค์ประกอบที่ต้องการ animation
    const elements = document.querySelectorAll(".animate-on-scroll");

    // กำหนด Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view"); // เพิ่มคลาสเมื่อเข้ามาใน viewport
          }
        });
      },
      {
        threshold: 0.1, // เริ่มทำงานเมื่อ 10% ขององค์ประกอบเข้ามาใน viewport
      }
    );

    // เริ่มสังเกตองค์ประกอบ
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <img
              src="img/lightsStage.jpg"
              className="img-responsive animate-on-scroll"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 className="animate-on-scroll">About Us (เราคืออะไร)</h2>
              <p className="text-secondary animate-on-scroll">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <h3 className="animate-on-scroll">Why Choose Us? (ทำไมต้องเลือกเรา)</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} >
                            {d}
                          </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`} >
                            {d}
                          </li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
