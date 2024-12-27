import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.to('.stagger-box', {
      y: 250,
      rotation: 360,
      borderRadius: '100%',
      repeat: -1,
      yoyo: true,
      duration: 2,
      stragger: {
        amount: 1.5,
        grid:[2, 1],
        axis: 'y',
        ease: 'circ.inOut',
        from: 'center',
      }
    })
  }, [])
  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
      GSAP stagger è una funzione che consente di applicare animazioni con un ritardo
      ritardo sfalsato a un gruppo di elementi.
      </p>

      <p className="mt-5 text-gray-500">
        Utilizzando la funzione di stagger di GSAP, è possibile specificare la quantità di tempo
        di tempo per scaglionare le animazioni tra un elemento e l&apos;altro, nonché personalizzare easing e la durata di ogni singola animazione.
        e la durata di ogni singola animazione. Ciò consente di
        creare effetti dinamici e visivamente accattivanti, come dissolvenze sfalsate,
        rotazioni, movimenti e altro ancora.
      </p>

      <p className="mt-5 text-gray-500">
        Per saperne di più sul{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
