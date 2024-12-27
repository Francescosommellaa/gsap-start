import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  // TODO: Implement the gsap scroll trigger

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 10%",
          scrub: true,
          ease: "power1.inOut",
        }
      })
    })
  }, { scope: scrollRef });


  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger è un plugin che permette di creare animazioni
        che vengono attivate dalla posizione di scorrimento della pagina.
      </p>

      <p className="mt-5 text-gray-500">
        Con ScrollTrigger, è possibile definire varie azioni da attivare in corrispondenza di
        punti di scorrimento specifici, come l&apos;inizio o la fine di un&apos;animazione,
        scorrere le animazioni mentre l&apos;utente scorre, appuntare elementi sullo schermo e altro ancora.
        allo schermo e altro ancora.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Per saperne di più sul metodo{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
           Scorri in basso per vedere l&apos;animazione
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
