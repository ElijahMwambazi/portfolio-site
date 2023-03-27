const ShootingStars = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <span className="absolute w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star"></span>
      <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-2000"></span>
      <span className="absolute top-80 right-0 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-4000"></span>
      <span className="absolute top-0 right-180 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-6000"></span>
      <span className="absolute top-0 right-400 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-8000"></span>
      <span className="absolute top-0 right-600 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-10000"></span>
      <span className="absolute top-300 right-0 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-12000"></span>
      <span className="absolute top-0 right-700 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-14000"></span>
      <span className="absolute top-0 right-1000 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-7500"></span>
      <span className="absolute top-0 right-450 w-4 h-4 rounded-full bg-white shadow-lg animate-shooting-star animation-delay-27500"></span>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed animate-bg"></div>
    </section>
  );
};

export default ShootingStars;
