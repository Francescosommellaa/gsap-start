import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to('#blue-box', {
    x: 250,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    duration: 2,
    ease: 'bouncie-in-out',
  })
},[]);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        <code>gsap.to()</code> viene utilizzato per animare gli elementi dal loro
        stato corrente a un nuovo stato.
      </p>
      <p className="mt-5 text-gray-500">
        <code>gsap.to()</code> è simile al metodo{" "}
        <code>gsap.from()</code> ma la differenza è che il metodo{" "}
        <code>gsap.to()</code> anima gli elementi dal loro stato corrente
        a un nuovo stato, mentre il metodo <code>gsap.from()</code> anima gli elementi
        da un nuovo stato a quello attuale.
      </p>

      <p className="mt-5 text-gray-500">
        Per saperne di più sul metodo{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
