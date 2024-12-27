import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  // TODO: Implement gsap text animation
  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });

    gsap.fromTo('.para', {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      delay: 1,
      stragger: 0.2,
    })
  }, [])

  return (
    <main>
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        Possiamo usare lo stesso metodo come <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> e{" "}
        <code>gsap.timeline()</code> per animare i testi.
      </p>

      <p className="mt-5 text-gray-500 para">
        Utilizzando questi metodi si possono ottenere varie animazioni ed effetti del testo
        come dissolvenza in entrata, dissolvenza in uscita, scorrimento in entrata, scorrimento in uscita e molti altri.
      </p>

      <p className="mt-5 text-gray-500 para">
        Per animazioni ed effetti di testo più avanzati, è possibile esplorare il plugin GSAP
        TextPlugin o altre librerie di terze parti specializzate in animazioni di testo.
        animazioni di testo.
      </p>

      <p className="mt-5 text-gray-500 para">
        Per saperne di più sul plugin{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
      </p>
    </main>
  );
};

export default GsapText;
