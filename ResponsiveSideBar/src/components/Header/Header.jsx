import React from 'react'

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-neutral-700">
      {/* Logo */}
      <span className="text-lg font-semibold">Logo</span>

      <div className="flex items-center gap-3">
        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex border border-neutral-600 rounded-full overflow-hidden">
          <button className="px-4 py-1 text-sm hover:bg-neutral-800">
            Light
          </button>
          <button className="px-4 py-1 text-sm bg-neutral-800">Dark</button>
        </div>

        {/* Mobile Hamburger (RIGHT) */}
        <button
          className="md:hidden text-xl"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header