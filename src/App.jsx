import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

/* configuraciones por defecto para que tenga reverso la animacion de scroll */
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

function App() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from(".title span", {
        y: 150,
        skewY: 7,
        duration: 3,
      }).from(".txt-bottom", {
        letterSpacing: -10,
        opacity: 0,
        duration: 3,
      });

      /* crece la imagen */
      t1.to(".img-container", {
        scale: 50,
        ease: "ease",
        scrollTrigger: {
          trigger: ".video-section",
          scrub: 1,
          start: "top top",
          end: "bottom",
          pin: true,
        },
      });

      /* mover titulo a la derecha en scroll*/
      gsap.to(".right", {
        autoAlpha: 0,
        x: 500,
        duration: 1.5,
        scrollTrigger: {
          start: 1,
        },
      });

      /* mover titulos a la izquierda en scroll */
      gsap.to(".left", {
        autoAlpha: 0,
        x: -500,
        duration: 1.5,
        scrollTrigger: {
          start: 1,
        },
      });

      const tl = gsap.timeline();

      tl.from(".left-side div", {
        y: 150,
        opacity: 0,
        stagger: {
          amount: 0.2,
        },
        delay: 2,
      })
        .from(".right-side", { opacity: 0, duration: 3 }, 0.5)
        .to(".wrapper", { x: -window.innerWidth, duration: 2 });

        gsap.utils.toArray('.col').forEach(image=>{
          gsap.fromTo(image,{
            opacity:.3,
            x:0
          },{
            opacity:1,
            x:-50,
            scrollTrigger:{
              trigger:image,
              start:"10%",
              stagger:{
                amount:.4
              }
            }
          })
        })

      ScrollTrigger.create({
        animation: tl,
        trigger: ".wrapper",
        start: "top top",
        end: "+=400",
        scrub: 1,
        pin: true,
        ease: "easeOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <section className="video-section">
          <div className="video-container">
            <video src="./flower.mp4" autoPlay loop muted></video>
          </div>
          <div className="img-container">
            <img className="img" src="./window.png" alt="" />
          </div>

          <div className="text-content">
            <div className="img_txt">
              <div className="title sm left">
                <span>between</span>
              </div>
              <div className="title bg left">
                <span>Reality</span>
              </div>
              <div className="title bg right n">
                <span>&</span>
              </div>
              <div className="title bg right">
                <span>Dream</span>
              </div>
            </div>
            <p className="txt-bottom">shots that will change your mind</p>
          </div>

          <div className="v_container">
            <div className="left-side">
              <div className="tv">
                <div className="bg">push</div>
                <div className="sm">the</div>
                <div className="bg bottom">envelope</div>
              </div>
              <div className="text-container">
                <p>
                  Photography has become a big part of almost every element of
                  our lives.
                </p>
                <p>
                  It become widespread and diverse but we know that this is
                  still a real form of art and magic.
                </p>
              </div>
            </div>
            <div className="right-side">
              <p>
                explore works <i className="fa-solid fa-arrow-right-long"></i>
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="boxes-container">
            <div className="columns box1">
              <div className="col col-1">
                <img src="./1.jpeg" alt="" />
                <img src="./2.jpeg" alt="" />
              </div>
              <div className="col-2">
                <h1>Carolina</h1>
                <span>28 october 2021</span>
                <div className="line"></div>
                <div className="text-box"></div>
                <p>
                  This series is excellently showing that ordinary portrait
                  photography still can be inspiring for you
                </p>
                <p>
                  Check the shots of beautiful Caroline in hat with red and
                  green lights
                </p>
              </div>
              <div className="col col-3">
                <img src="./3.webp" alt="" />
                <img src="./4.jpeg" alt="" />
                <img src="./5.jpeg" alt="" />
              </div>
            </div>
            <div className="columns box2">
              <div className="col col-1">
                <img src="./p1.jpeg" alt="" />
                <img src="./p2.webp" alt="" />
              </div>
              <div className="col-2">
                <h1>soul dance</h1>
                <span>17 september 2021</span>
                <div className="line"></div>
                <div className="text-box">
                  <p>
                    Beautiful dance of Hanna in neon ligths with retro effect.
                    Pink lights, pretty women and sensuality.
                  </p>
                  <p>
                    Inspiring vibes and invisible beautiful soul on this shots.
                  </p>
                </div>
              </div>
              <div className="col col-3">
                <img src="./p3.jpeg" alt="" />
                <img src="./p4.jpeg" alt="" />
                <img src="./p5.jpeg" alt="" />
              </div>
            </div>
            <div className="columns box3">
              <div className="col col-1">
                <img src="./b1.jpeg" alt="" />
                <img src="./b2.webp" alt="" />
                <img src="./b3.jpeg" alt="" />
                <img src="./b4.jpeg" alt="" />
              </div>
              <div className="col-2">
                <h1>80's vibes</h1>
                <span>1 september 2021</span>
                <div className="line"></div>
                <div className="text-box">
                  <p>
                    Retro nostagia can be sweet and sour at the same time.
                    Christina helped us to make photos, that will give you this
                    feelings.
                  </p>
                  <p>
                    Drop in past times with this collection of 80's styled
                    photos.
                  </p>
                </div>
              </div>
              <div className="col col-3">
                <img src="./b5.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
