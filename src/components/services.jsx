import React from "react";
import { useNavigate } from "react-router-dom";
import images from "../data/datajs"; // นำเข้าข้อมูลรูปภาพ

export const Services = (props) => {
  const navigate = useNavigate();

  return (
    <div id="services" className="text-center">
      <div className="container">
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
                <div key={`${d.name}-${i}`} className="col-md-3 cardd m-2 " style={{ minHeight: "430px" }}>
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <img
                    src={d.img}
                    alt={d.name}
                    className="img-fluid rounded shadow-sm"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <button
                      onClick={() => navigate("/detailsSV")}
                      href="#"
                      className="btn btn-primary fs-5"
                    >
                      Go somewhere
                    </button>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
