import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GsapFrom = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(() => {
    gsap.from('#green-box', {
    x: 250,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    duration: 2,
    ease: 'power1.inOut',
  })
},[]);
  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        <code>gsap.from()</code> viene utilizzato per animare gli elementi da un
        nuovo stato al loro stato attuale
      </p>

      <p className="mt-5 text-gray-500">
        <code>gsap.from()</code> è simile al metodo{" "}
        <code>gsap.to()</code> ma la differenza è che il metodo{" "}
        <code>gsap.from()</code> anima gli elementi da un nuovo stato al
        al loro stato attuale, mentre il metodo <code>gsap.to()</code> anima gli elementi
        dal loro stato attuale a un nuovo stato.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the metodo{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
