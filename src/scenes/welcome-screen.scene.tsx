const WelcomeScreen = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="relative">
        <div className="absolute border rounded-full opacity-0 animate-loading h-5 w-5"></div>
        <div className="absolute border rounded-full opacity-0 animate-loading-2 h-5 w-5"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
