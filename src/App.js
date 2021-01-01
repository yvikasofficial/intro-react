import gsap from "gsap";
import React, { useEffect } from "react";
import Banner from "./compoents/banner";
import Cases from "./compoents/cases";
import Header from "./compoents/header";
import IntroOverlay from "./compoents/introOverlay";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", 0, { visibility: "visible" });

    const tl = gsap.timeline();
    tl.from(".line span", 1.8, {
      y: 100,
      delay: 1,
      skew: 7,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      });
  });

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
