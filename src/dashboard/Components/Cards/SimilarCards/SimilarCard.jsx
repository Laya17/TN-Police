import React from "react";
import style from "./SimilarCard.module.css";

export default function SimilarCard({ data }) {
  const { head1, subhead, content1, variant, count, time, icon1, icon2 } = data;

  return (
    <div className={style.cardContainer}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img style={{ height: "50px", width: "50px" }} src={icon1} alt="icon1" />
        <div style={{ padding: "10px" }}>
          <p style={{ fontWeight: "400", fontSize: "18px" }}>{head1}</p>
          <p style={{ fontWeight: "300", fontSize: "16px", color: "hsl(210deg 2.38% 32.94%)" }}>{subhead}</p>
        </div>
      </div>
      <div style={{ fontSize: "28px" }}>{content1}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={{ height: "30px", width: "30px" }} src={icon2} alt="icon2" />
          <p>{variant}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>{count}</p>
          <p style={{ color: "hsl(210deg 2.38% 32.94%)", paddingLeft: "5px" }}>{time}</p>
        </div>
      </div>
    </div>
  );
}
