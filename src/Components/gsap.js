// import React, { useEffect, useRef } from "react";
// import  {gsap, TweenMax, Power3 } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import luge from "@waaark/luge";
// // gsap.ragisterPlugin(ScrollTrigger)
// export default function Gsap() {
//     let sanaRef=useRef(null)
//   let logoItem = useRef(null);
//   let textItem = useRef(null);

// // useEffect(()=>{
// //     const el=sanaRef.current;
// //     gsap.fromTo(el,{rotation:180,duration:3})
// // })

//   useEffect(() => {
//     TweenMax.to(sanaRef, 0.8,
//         {
//            rotation:360,duration:3,
        
//        ease: Power3.easeOut,
//      });
//     console.log(logoItem);
//     TweenMax.to(logoItem, 0.8, {
//       opacity: 0.25,
//       y: -30,

//       ease: Power3.easeOut,
//     });
//     TweenMax.to(textItem, 0.8, {
//       x: -50,
//       ease: Power3.easeOut,
//     });
 
//   }, []);
 

//   return (
//     <>
//       <div  ref={(el) => {
//           sanaRef = el;
//         }} className="bg-red-500 h-52 w-1/6 my-20 ml-20"></div>
//       <div
//         ref={(el) => {
//           logoItem = el;
//         }}
//         className="bg-red-200 h-52 my-10 mx-20 w-1/6 "
//         id="sana"
//       ></div>
//       <p
//         ref={(el) => {
//           textItem = el;
//         }}
//       >
//         xsuaja xjasxzKX uxjzxmjzbc Line 107:19: The href attribute requires a
//         valid value to be accessible. Provide a valid, navigable address as the
//         href value. If you cannot provide a valid href, but still need the
//         element to resemble a link, use a button and change it with appropriate
//         styles. Learn more:
//       </p>
//       <img src="/Images/api.gif" alt=""></img>
//     </>
//   );
// }
import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

export default function Gsap() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
  return (
   <>
     <ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={3}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage page={4}>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>
   </>
  )
}
