export const RedFooter = () => {
  return (
    <footer className="py-10 bg-black border-t border-red-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* LOGO */}
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <span className="text-red-500">MySoc</span>
              <span className="text-white">Labs</span>
            </span>
          </div>

          {/* TAGLINE */}
          <p className="text-gray-400 text-sm mb-4">
            Protecting your digital future with advanced cybersecurity solutions
          </p>

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} MySocLabs. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};
