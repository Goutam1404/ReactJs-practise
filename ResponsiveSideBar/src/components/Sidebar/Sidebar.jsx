
const Sidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-64 p-4
          bg-neutral-950
          transform transition-transform duration-300 ease-out
          
          /* Mobile animation */
          ${open ? "translate-x-0" : "translate-x-full"}

          /* Desktop */
          md:static md:translate-x-0 md:transition-none
        `}
      >
        <div className="h-full rounded-2xl border border-neutral-700 p-4 flex flex-col gap-6">
          {/* Mobile header */}
          <div className="flex items-center justify-between md:hidden">
            <span className="text-sm text-neutral-400">Menu</span>
            <button
              onClick={onClose}
              className="text-lg"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-neutral-400">sideBar</p>

          <nav className="flex flex-col gap-3">
            <div className="h-3 bg-neutral-700 rounded" />
            <div className="h-3 bg-neutral-700 rounded" />
            <div className="h-3 bg-neutral-700 rounded" />
            <div className="h-3 w-3/4 bg-neutral-700 rounded" />
          </nav>

          {/* Mobile Theme Toggle */}
          <div className="mt-auto md:hidden flex border border-neutral-600 rounded-full overflow-hidden">
            <button className="w-1/2 py-1 text-sm hover:bg-neutral-800 transition-colors">
              Light
            </button>
            <button className="w-1/2 py-1 text-sm bg-neutral-800">Dark</button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar