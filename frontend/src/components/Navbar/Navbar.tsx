

const Navbar: React.FC = () => {
  return (
    <nav className="z-20">
  <div className="h-10vh flex justify-between lg:py-5 px-10 py-10 border-b w-full">
    <div className="flex items-center flex-1">
      <h2 className="text-6xl font-bold text-pink-500">ChatBot</h2>
    </div>
    <div>
      <ul className="flex gap-10 mr-16 text-[18px]">
        <div className="group relative">
          <button className="hover:text-pink-400 transition border border-white hover:border-pink-400 cursor-pointer px-4 py-2">
            Home
          </button>
          <div className="hidden group-hover:flex flex-col absolute left-0 p-6 w-48 bg-white z-20 text-black duration-300 shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-blue-400">Hello</h3>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <button className="hover:text-pink-400 transition border border-white hover:border-pink-400 cursor-pointer px-4 py-2">
            About
          </button>
          <div className="hidden group-hover:flex flex-col absolute left-0 p-6 w-48 bg-white z-20 text-black duration-300 shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-pink-400">Hello</h3>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <button className="hover:text-pink-400 transition border border-white hover:border-pink-400 cursor-pointer px-4 py-2">
            Study
          </button>
          <div className="hidden group-hover:flex flex-col absolute left-0 p-6 w-48 bg-white z-20 text-black duration-300 shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-pink-400">Hello</h3>
                <a href="#" className="hover:underline hover:text-pink-400">
                   AI Flashcards
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Surmmary Notes
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <button className="hover:text-pink-400 transition border border-white hover:border-pink-400 cursor-pointer px-4 py-2">
            Profile
          </button>
          <div className="hidden group-hover:flex flex-col absolute left-0 p-6 w-48 bg-white z-20 text-black duration-300 shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-pink-400">Hello</h3>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Settings
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Customize Your Bot
                </a>
                <a href="#" className="hover:underline hover:text-pink-400">
                  Talk Talk
                </a>
              </div>
            </div>
                </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
