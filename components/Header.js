import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";

export const Header = () => {
  return (
    <header className="fixed inset-y-0 left-0 z-40 px-6 pt-4 pb-8 overflow-y-auto border-r contents w-72 border-zinc-900/10 dark:border-white/10 lg:block xl:w-80">
      <Logo />
      {/* <!-- Header --> */}
      <div
        className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
        style={{ "--bg-opacity-light": 0.5, "--bg-opacity-dark": 0.2 }}
      >
        <div className="container flex items-center justify-between gap-12 h-14">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <Search />

          {/* <!-- Mobile Responsive Header Starts --> */}
          <div className="flex items-center gap-5 lg:hidden">
            <button
              type="button"
              className="flex items-center justify-center w-6 h-6 transition rounded-md hover:bg-zinc-900/5 dark:hover:bg-white/5"
              aria-label="Toggle navigation"
            >
              <img
                src="./assets/icons/hamburger.svg"
                alt="Menu"
                className="w-2.5 stroke-zinc-900 dark:stroke-white"
              />
            </button>
            <a aria-label="Home" href="/">
              <img
                src="./assets/icons/logo.svg"
                alt="Protocol"
                className="h-6"
              />
            </a>
          </div>
          {/*     <!-- Mobile Responsive Header Ends -->
           */}
          <div className="flex items-center gap-5">
            <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
            <div className="flex gap-4">
              <div className="contents lg:hidden">
                <button
                  type="button"
                  className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                  aria-label="Find something..."
                >
                  <img
                    src="./assets/icons/search.svg"
                    alt="Search"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Ends --> */}
      <Sidebar />
    </header>
  );
};
