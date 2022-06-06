import React, { useEffect } from "react";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Deploy from "./Components/Deploy";
import Help from "./Components/Help";

import Footer from "./Components/Footer";

import Gsap from "./Components/gsap";

import Features from "./Components/Features";
import Review from "./Components/Review";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

export default function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <>
      {/* <Gsap></Gsap> */}

      <ScrollContainer>
      <ScrollPage page={0}>
          <Animator animation={  MoveOut(0, 800)}>
          <Navbar></Navbar>
          </Animator>
        </ScrollPage>
       

        <ScrollPage page={1}>
          <Animator animation={MoveOut(0, 1000)}>
            <Deploy></Deploy>{" "}
          </Animator>
        </ScrollPage>

       
{/*       
        <ScrollPage page={2}>
          <Animator animation={MoveOut(0, 1000)}>
          <Help></Help>
          </Animator>
        </ScrollPage> */}
        <Help></Help>
        {/* <ScrollPage page={3}>
          <Animator animation={MoveIn(-1000, 0)}>
          <Features></Features>
          </Animator>
        </ScrollPage> */}
        <Features></Features>
        {/* <ScrollPage page={4}>
          <Animator animation={MoveIn(-1000, 0)}>
          <Review></Review>
          </Animator>
        </ScrollPage> */}
        <Review></Review>
  
        <Footer></Footer>
        
      </ScrollContainer>
    </>
  );
}
