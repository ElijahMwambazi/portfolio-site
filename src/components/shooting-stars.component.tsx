const ShootingStars = () => {
  return (
    <section className="absolute top-0 left-0 h-full w-full overflow-hidden z-20 pointer-events-none">
      <div
        className="absolute w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
        }}
      ></div>
      <span
        className="absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
          animationDelay: "2s",
        }}
      ></span>
      <span
        className="absolute top-80 right-0 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
          animationDelay: "4s",
        }}
      ></span>
      <span
        className="absolute top-0 right-180 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
          animationDelay: "6s",
        }}
      ></span>
      <span
        className="absolute top-0 right-400 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
          animationDelay: "8s",
        }}
      ></span>
      <span
        className="absolute top-0 right-600 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
          animationDelay: "10s",
        }}
      ></span>
      <span
        className="absolute top-300 right-0 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
          animationDelay: "12s",
        }}
      ></span>
      <span
        className="absolute top-0 right-700 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 2s infinite",
          animationDelay: "14s",
        }}
      ></span>
      <span
        className="absolute top-0 right-1000 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 0.5s infinite",
          animationDelay: "7.5s",
        }}
      ></span>
      <span
        className="absolute top-0 right-450 w-2 h-2 rounded-full bg-yellow shadow-lg"
        style={{
          animation: "shootingStar 0.5s infinite",
          animationDelay: "27.5s",
        }}
      ></span>
    </section>
  );
};

export default ShootingStars;
