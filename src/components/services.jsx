import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div  className="container">
        <div className="section-title">
          <h2>Our Services(บริการของเรา)</h2>
          <p>
            เรามอบประสบการณ์ความบันเทิงที่ครบครันด้วยบริการให้เช่าเครื่องเสียงคุณภาพสูง
            พร้อมอุปกรณ์สำหรับจัดงานและทีมงานมืออาชีพ
            ที่จะช่วยสร้างความประทับใจในทุกโอกาสพิเศษของคุณ
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 cardd m-2 ">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                      <a href="#" className="btn btn-primary fs-5">
                      Go somewhere
                    </a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
