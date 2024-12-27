import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  // TODO: Implement the gsap timeline
  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });
  useGSAP(() => {
    timeline.to('#yellow-box', {
      x: 250,
      rotation: 360,
      borderRadius: "50%",
      ease: "back.inout",
      duration: 2,
    });

    timeline.to('#yellow-box', {
      y: 50,
      scale: 2,
      rotation: 360,
      borderRadius: "24px",
      ease: "back.inout",
      duration: 2,
    })

    timeline.to('#yellow-box', {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      ease: "back.inout",
      duration: 2,
    }) 
 }, []);

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        <code>gsap.timeline()</code> viene utilizzato per creare un&apos;istanza di timeline
        che può essere usata per gestire più animazioni.
      </p>

      <p className="mt-5 text-gray-500">
        <code>gsap.timeline()</code> è simile al metodo{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, e{" "}
        <code>gsap.fromTo()</code>, ma la differenze è che il metodo{" "}
        <code>gsap.timeline()</code> viene utilizzato per creare un&apos;istanza di timeline
        che può essere utilizzata per gestire più animazioni, mentre il metodo{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, e{" "}
        <code>gsap.fromTo()</code> sono utilizzati per animare gli elementi dal
        dal loro stato attuale a un nuovo stato, da un nuovo stato al loro stato attuale e da un nuovo stato a un nuovo stato.
      </p>

      <p className="mt-5 text-gray-500">
        Per saperne di più sul metodo{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={() => {
          if(timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
