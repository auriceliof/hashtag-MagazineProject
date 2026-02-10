import React from "react";
import logo from "../../assets/logo/hashtag.svg";

const Header = () => {
  return (
    <header className="flex text-xl sticky top-0 shadown-xl shadown-slate-400 bg-slate-950 text-slate-200 px-8 py-4">
      <a href="/">
        <img className='h-16 px-2' src={logo} alt="Logo da Hashtag." />
      </a>
    </header>
  );
};

export default Header;
