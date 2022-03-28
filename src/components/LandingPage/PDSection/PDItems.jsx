import React from "react";

const PDItems = ({ data }) => {
  return (
    <section className="pd-content blob" id="pd">
      <div className="parallax parallax-pd_img"></div>
      <h2 id="java">-- RoadTalks --</h2>
      {data
        .filter((i) => {
          if (i.item_type === "pd") {
            return i;
          }
        })
        .map((item) => (
          <div
            className="tech-horizontal tech-item--006 blob"
            id="tech-006"
            key={item.id}
          >
            <h3>{item.title}</h3>
            <a
              href={item.item_link}
              target="_blank"
              className="pd-img_link"
              rel="noreferrer"
            >
              <img src={item.img} alt="roadtalks link" className="pd-img" />
            </a>
            <div className="descriptions">
              <p>{item.description}</p>
            </div>
            <a
              href={item.item_link}
              target="_blank"
              className="second-nav pd-img_link"
              rel="noreferrer"
            >
              RoadTalks Link
            </a>
          </div>
        ))}
    </section>
  );
};

export default PDItems;
