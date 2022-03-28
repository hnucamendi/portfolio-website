import React, { useState, useEffect } from "react";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import Loading from "../LoadingPage/Loading";
import MainContent from "./MainContent";
import TechItems from "./TechSection/TechItems";
import PDItems from "./PDSection/PDItems";
import Axios from "axios";
import "./landingPage.scss";
import e from "express";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  console.log(window.screen.availHeight);

  const handleBottomScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      console.log("bottom");
      setScrolledToBottom(true);
    } else {
      setScrolledToBottom(false);
    }
    console.log("scrolled");
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    e.target.scrollTo(0, 0);
  };

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        throw err;
      });

    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <MainContent />
      <div className={`wrapper `} onScroll={handleBottomScroll}>
        <TechItems data={data} />
        <PDItems data={data} />
        <Footer scrolled={scrolledToBottom} />

        <div class="scroll-up" id={`${scrolledToBottom ? "" : "hidden"}`}>
          <button className="scroll-up_btn" onClick={handleScrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="chevron-up"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
