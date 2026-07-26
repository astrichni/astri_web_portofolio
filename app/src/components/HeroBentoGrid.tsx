import landingPageImg from '../img/landing-page.png';

export default function HeroBentoGrid() {
  return (
    <div className="w-full relative">
      <div className="brutal-card p-2 sm:p-3 bg-white rounded-3xl overflow-hidden shadow-brutal-lg border-[3px] border-black">
        <img
          src={landingPageImg}
          alt="Astri Cahyani Portfolio Showcase"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
