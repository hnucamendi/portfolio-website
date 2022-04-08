import React, { useState } from "react";

const TechItems = ({ data }) => {
  return (
    <>
      <div className="parallax parallax-tech_img"></div>
      <section className="tech-content" id="tech">
        <h2 id="java">-- HTML / CSS / JavaScript --</h2>
        {data
          .filter((i) => {
            if (i.item_type === "tech") {
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
              <a href={item.item_link} target="_blank" rel="noreferrer">
                <img
                  src={item.img}
                  alt="Ecommerce landing page"
                  className="tech_img"
                />
              </a>
              <div className="descriptions">
                <p>{item.description}</p>
              </div>
              <div>
                <a
                  href={item.item_link}
                  target="_blank"
                  rel="noreferrer"
                  className="second-nav"
                >
                  Website Link
                </a>
                <a
                  href={item.github_link}
                  target="_blank"
                  rel="noreferrer"
                  className="second-nav"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default TechItems;
