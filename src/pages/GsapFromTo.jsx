import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() method
  useGSAP(() => {
    gsap.fromTo('#red-box',{
      x: 0,
      rotation: 0,
      borderRadius: '0%',
      ease: 'bounce.out',
    }, {
    x: 250,
    repeat: -1,
    yoyo: true,
    borderRadius: '50%',
    rotation: 360,
    duration: 2,
    ease: 'bouncie-out',
  })
},[]);
  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        <code>gsap.fromTo()</code> viene utilizzato per animare gli elementi da un
        nuovo stato a un nuovo stato
      </p>

      <p className="mt-5 text-gray-500">
        <code>gsap.fromTo()</code> è simile al metodo{" "}
        <code>gsap.from()</code> e al metodo <code>gsap.to()</code> , ma la
        differenza è che il metodo<code>gsap.fromTo()</code> anima
        dal nuovo stato ad un altro nuovo stato, mentre il metodo{" "}
        <code>gsap.from()</code> anima gli elementi da un nuovo stato al
        al loro stato attuale e il metodo <code>gsap.to()</code> anima gli elementi
        dal loro stato attuale a un nuovo stato.
      </p>

      <p className="mt-5 text-gray-500">
        Per saperne di più sul metodo{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
