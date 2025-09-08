import NavBar from "./NavBar";

export default function Hero({info}){
    return (
    <>
      <div className="relative h-screen w-full flex flex-col justify-center items-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

        <div className="absolute top-0 w-full z-20">
          <NavBar />
        </div>

        <div className="relative z-10 flex flex-col items-center bg-gray-900/80 p-10 rounded-3xl border-2 border-neutral-500 shadow-lg shadow-neutral-900/50">
          <img
            src={info.profileImage}
            alt="profile"
            className="w-48 h-48 rounded-full border-4 border-neutral-500 shadow-lg shadow-neutral-900/50"
          />
          <p className="text-gray-300 text-4xl mt-4 font-serif">{info.name}</p>
          <p className="text-gray-300 text-2xl mt-2 font-serif">{info.title}</p>
        </div>
      </div>
    </>
  );
}