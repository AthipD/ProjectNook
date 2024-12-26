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
        <div className="row ">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-3 cardd m-3 d-flex flex-column justify-content-between"
                  style={{
                    height: "100%", // ทำให้การ์ดมีความสูงเต็ม
                    minHeight: "450px", // กำหนดความสูงขั้นต่ำของการ์ด
                  }}
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    className="img-fluid rounded shadow-sm"
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      objectFit: "cover",
                      alignSelf: "center", // จัดให้อยู่กึ่งกลางแนวนอน
                    }}
                  />
                  <div className="service-desc text-center mt-3">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                  <button
                    onClick={() => navigate("/detailsSV")}
                    href="#"
                    className="btn btn-primary mt-auto" // ใช้ mt-auto ดันปุ่มให้อยู่ล่างสุด
                  >
                    Go somewhere
                  </button>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
