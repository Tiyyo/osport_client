import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center w-full h-1/10 px-12 py-4 bg-neutral-focus">
      <img className="w-28 h-24" src="/imageedit_3_3008038748.png" alt="logo" />
      <div className="tooltip tooltip-bottom" data-tip="Dark mode ON">
        <input type="checkbox" className="toggle toggle-sm" checked />
        {/* <input type="checkbox" className="toggle toggle-sm" disabled /> */}
      </div>
    </header>
  );
}

export default Header;
