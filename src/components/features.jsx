import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center features">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white mt-5">Features (คุณสมบัติ)</h2>
        </div>
        <div className="row scroll-container">
          {props.data
            ? props.data.map((d, i) => {
                return (
                  <div
                    key={`${d.title}-${i}`}
                    className="cardft col-12 col-md-9 col-lg-2 m-3 p-2 rounded-full  " // จัดการขนาดตามหน้าจอ
                    style={{ width: "" }}
                  >
                    {/* การเเสดง icon */}
                    {/* <img src="..." className="card-img-top" alt="..."></img> */}
                    <div className="card-body">
                      <i style={{ text: "center" }} className={d.icon}></i>
                      <h2 style={{ color: "#FF9C73" }} className="card-title  ">{d.title}</h2>
                      <p  className="card-text text-white">{d.text}</p>
                      {/* <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                    </div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </div>
    // <div className="card container" style={{width:"100px"}}>
    //   <img src="" className="card-img-top" alt="" />
    //   <div className="card-body">
    //     <h5 className="card-title">ssss</h5>
    //     <p className="card-text">sssssss</p>
    //     <a className="btn btn-primary">xxxx</a>
    //   </div>

    // </div>
  );
};

//  ----โค้ดเดิมที่ก่อนจะนำไปเเก้ ----
